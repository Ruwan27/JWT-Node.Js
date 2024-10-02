import { PrismaClient, UserRole } from "@prisma/client";

const DB = new PrismaClient();

export { UserRole };
export default DB;
