import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(500).end();
  }

  const { username, email, name, password } = req.body; 

  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { username },
    });

    const fetchedUserTwo = await prisma.user.findUnique({
      where: { email },
    });

    if (fetchedUser || fetchedUserTwo) {
      res.status(404).end();
    } else {
      const add = await prisma.user.create({
        data: {
          name: name,
          username: username,
          email: email,
          password: bcrypt.hashSync(password, 15),
          publicOrPrivate: "public",
          bornOn: "N/A",
          followers: [],
          following: [],
          profilePicture: "https://zpvnsthcgczpnrmfdbmd.supabase.co/storage/v1/object/public/hssocial//Default_pfp.jpg",
          bannerPicture: "",
        },
      });
      res.status(200).json(add);
    }
  } catch (err) {
    res.status(404).end();
  }
}
