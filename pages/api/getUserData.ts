import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
    return;
  } else {
    try {
      const username = req.body.username;

      const fetchedUser = await prisma.user.findUnique({
        where: { username },
      });

      if (fetchedUser) {
        const data = {
          userId: fetchedUser.id,
          username: fetchedUser.username,
          publicOrPrivate: fetchedUser.publicOrPrivate,
          bornOn: fetchedUser.bornOn,
          followers: fetchedUser.followers,
          following: fetchedUser.following,
          profilePicture: fetchedUser.profilePicture,
          bannerPicture: fetchedUser.bannerPicture,
          dateCreated: fetchedUser.dateCreated,
          dateUpdated: fetchedUser.dateUpdated,
        };
        res.status(200).json(data);
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).end();
    }
  }
}
