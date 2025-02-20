import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/dbConfigure/prisma";
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
      const fetchedPosts = await prisma.post.findMany();

      if (fetchedPosts) {
        res.status(200).json(fetchedPosts);
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).end();
    }
  }
}
