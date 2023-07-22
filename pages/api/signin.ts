import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/dbConfigure/prisma";
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
      const password = req.body.password;

      const fetchedUser = await prisma.user.findUnique({
        where: { username },
      });

      if (fetchedUser) {
        const passwordCompare = await bcrypt.compareSync(
          password,
          fetchedUser.password
        );

        if (passwordCompare) {
          const generateToken = jwt.sign(
            {
              userId: fetchedUser.id,
              username: fetchedUser.username,
              email: fetchedUser.email,
              name: fetchedUser.name,
              publicOrPrivate: fetchedUser.publicOrPrivate,
              bornOn: fetchedUser.bornOn,
              followers: fetchedUser.followers,
              following: fetchedUser.following,
              profilePicture: fetchedUser.profilePicture,
              bannerPicture: fetchedUser.bannerPicture,
              dateCreated: fetchedUser.dateCreated,
              dateUpdated: fetchedUser.dateUpdated,
            },
            process.env.JSON_SECRET as string,
            { expiresIn: "1h" }
          );
          res.status(200).json(generateToken);
        } else {
          res.status(404).end();
        }
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).end();
    }
  }
}
