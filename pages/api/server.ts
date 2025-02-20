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
          "tray"
        ) as DecodedToken;

        const userId = decodedToken.userId;

        const fetchedUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        const data = {
          userId: decodedToken.id,
          username: decodedToken.username,
          email: decodedToken.email,
          name: decodedToken.name,
          publicOrPrivate: decodedToken.publicOrPrivate,
          bornOn: decodedToken.bornOn,
          followers: decodedToken.followers,
          following: decodedToken.following,
          profilePicture: decodedToken.profilePicture,
          bannerPicture: decodedToken.bannerPicture,
          dateCreated: decodedToken.dateCreated,
          dateUpdated: decodedToken.dateUpdated,
        };

        if (fetchedUser) {
          res.status(200).json(data);
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
