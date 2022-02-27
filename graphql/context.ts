import prisma from "./common/prisma";
import { PrismaClient } from "@prisma/client";

export type Context = {
  db: PrismaClient;
  event: any;
};

export async function createContext({
  event = {},
}: any = {}): Promise<Context> {
  return { event, db: prisma };
}
