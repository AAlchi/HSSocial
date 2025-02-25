import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
    return;
  } 

  try {
    const username = req.body.username as string;
    const session = await getServerSession(req, res, authOptions);
    
    let fetchedUsers;

    if (username != "") {
      fetchedUsers = await prisma.user.findUnique({
        where: { username: username }
      }); 
 
      const isFollowing = fetchedUsers?.followers.includes(session!.user.username) 

      return res.status(200).json({ fetchedUsers, isFollowing});

    } else {
      fetchedUsers = await prisma.user.findMany(); 

      return res.status(200).json(fetchedUsers);

    }
  
  } catch (err) {
    res.status(500).end();
  }

}
