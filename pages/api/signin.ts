import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/dbConfigure/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(req.body);
}
