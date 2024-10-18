# Prisma Postgres Quickstart
Welcome to the Prisma Postgres Quickstart project! This repository serves as a sample application to help you get started with Prisma Postgres, featuring Prisma's Accelerate and Pulse out of the box.

## Quickstart Guide
Follow these steps to get your Prisma Postgres application up and running:

### 1. Install Dependencies
After cloning the repository, install the required dependencies by running:
```bash
npm install
```

### 2. Add Environment Variables
Copy the provided API key into your .env file:
```bash
DATABASE_URL="your_database_url_here"
PULSE_API_KEY="your_pulse_api_key_here"
```

### 3. Migrate the Database
Run the following command to apply the initial database schema:
```bash
npx prisma migrate dev --name init
```

### 4. Seed the Database
Add sample data to your database:
```bash
npx prisma db seed
```

### 5. Explore with Prisma Studio
Use Prisma Studio to explore the data:
```bash
npx prisma studio
```

### 6. Run Accelerate Query
Test your query performance with Prisma's Accelerate caching:
```bash
npm run accelerate
```

### 7. Start Pulse Subscription
Set up real-time event streaming with Pulse:
```bash
npm run pulse
```

## You're all set!
You can now explore, modify, and extend the application to suit your needs. Enjoy working with Prisma Postgres, Accelerate, and Pulse!