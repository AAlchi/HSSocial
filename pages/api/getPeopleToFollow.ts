import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "GET") {
    res.status(500).end();
    return;
  } else {
    try {
      const fetchedUser = await prisma.user.findMany();

      if (fetchedUser) {
        res.status(200).json(fetchedUser);
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).end();
    }
  }
}
