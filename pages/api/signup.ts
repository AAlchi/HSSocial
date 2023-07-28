import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/dbConfigure/prisma";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(500).end();
  }

  const username = req.body.username;

  const password = req.body.password;
  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { username },
    });

    if (fetchedUser) {
      res.status(404).end();
    } else {
      const add = await prisma.user.create({
        data: {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(password, 15),
          publicOrPrivate: "public",
          bornOn: "N/A",
          followers: [""],
          following: [""],
          profilePicture: "",
          bannerPicture: "",
        },
      });
      res.status(200).json(add);
    }
  } catch (err) {
    res.status(404).end();
  }
}
