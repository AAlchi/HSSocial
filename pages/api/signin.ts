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
        res.status(200).json("Fetched");
      } else {
        res.status(200).json("Not Fetched");
      }

      //   if (fetchedUser) {
      //     const passwordCompare = await bcrypt.compareSync(
      //       password,
      //       fetchedUser.password
      //     );

      //     if (passwordCompare) {
      //       const generateToken = jwt.sign(
      //         { userId: fetchedUser.id },
      //         "traypizza",
      //         { expiresIn: "1h" }
      //       );
      //       res.status(200).json(generateToken);
      //     } else {
      //       res.status(404).end();
      //     }
      //   } else {
      //     res.status(404).end();
      //   }
    } catch (err) {
      res.status(200).json(err);
    }
  }
}
