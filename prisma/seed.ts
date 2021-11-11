import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.create({
    data: {
      email: "test@gmail.com",
      message: "Hola desde seed script",
      name: "Juan test"
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);