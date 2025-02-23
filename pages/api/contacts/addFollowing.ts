import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signIn } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
    return;
  } else {
    try {
      const { username, otherUsername } = req.body

      const fetchedUser = await prisma.user.findUnique({
        where: { username },
      });

      if (!fetchedUser) {
        return res.status(404).json({ message: "User not found "})
      }

    const updateProfile = await prisma.user.update({
        where: {
            username: username
        },
        data: {
            following: {
                push: otherUsername
            }
        }
    }) 

    const updateOtherProfile = await prisma.user.update({
        where: {
            username: otherUsername
        },
        data: {
            followers: {
                push: username
            }
        }
    }) 
    

    return res.status(200).json({ message: "Account Updated "})
 
    } catch (err) {
      res.status(500).end();
    }
  }
}
