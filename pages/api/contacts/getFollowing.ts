import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
    return;
  }

  const username = req.body.username as string;

  try {
    const isUserAvailable = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    const listOfUsers = await prisma.user.findMany({
        select: {name: true, username: true, profilePicture: true}
    })

    if (!isUserAvailable) {
        return res.status(404).json({ message: "User not found" })
    }

    const followerNames = new Set(isUserAvailable.following); 

    interface foundUsersInterface {
        profilePicture: string;
        name: string;
        username: string;
    }

    const foundUsers: foundUsersInterface[] = listOfUsers.filter(user => followerNames.has(user.username))

    return res.status(200).json(foundUsers)

  } catch (err) {
    res.status(500).end();
  }

}
