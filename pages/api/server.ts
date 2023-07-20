import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "@/dbConfigure/prisma";
import Cors from "cors";

interface DecodedToken extends JwtPayload {
  userId: string;
}

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
        const decodedToken: DecodedToken = jwt.verify(
          token,
          "traypizza"
        ) as DecodedToken;

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
