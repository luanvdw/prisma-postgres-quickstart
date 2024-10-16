import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withPulse } from "@prisma/extension-pulse/node";

const prisma = new PrismaClient()
  .$extends(withAccelerate())
  .$extends(withPulse({ apiKey: process.env.PULSE_API_KEY as string }));

/**
 *
 * Similates creating more users
 */
async function createUsers() {
  const totalUsers = await prisma.user.count()

  await prisma.user.create({
    data: {
      email: `prismanaut${totalUsers}@prisma.io`,
      name: `Prisma Naut ${totalUsers}`,
    }
  })

  console.log(`Created user: Prisma Naut ${totalUsers}`);
}

/**
 *
 * Uses Pulse to subscribe to users being created
 */
async function subscribeToUsers() {
  const stream = await prisma.user.stream({ name: "user-stream" })

  for await (const event of stream) {
    console.log('just received an event:', event)
  }
}

async function main() {
  const args = process.argv.slice(2);
  const operation = args[0];

  switch (operation) {
    case "create":
      await createUsers();
      break;
    case "subscribe":
      await subscribeToUsers();
      break;
    default:
      console.error('Invalid operation. Use "create" or "subscribe".');
      process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
