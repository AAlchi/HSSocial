import { PrismaClient } from "@prisma/client";

declare global {
  var prismaConfig: PrismaClient | undefined;
}

const client = globalThis.prismaConfig || new PrismaClient();

if (process.env.NODE_ENV === "production") {
  globalThis.prismaConfig = client;
}

export default client;
