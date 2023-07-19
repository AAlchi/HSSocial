import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/dbConfigure/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).end();
  } else {
    try {
      const token = req.cookies.token;

      if (!token) {
        res.status(401).end();
        return;
      }

      try {
        const decodedToken = jwt.verify(token, "traypizza");

        const userId = decodedToken.userId;

        const fetchedUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        if (fetchedUser) {
          res.status(200).json({ message: "User is authenticated." });
        } else {
          res.status(401).end();
        }
      } catch (err) {
        res.status(401).end();
      }
    } catch (err) {
      res.status(500).end();
    }
  }
}
