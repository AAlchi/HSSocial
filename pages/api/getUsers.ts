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
  }

  const username = req.body.username as string;

  try {

    let fetchedUsers;

    if (username != "") {
      fetchedUsers = await prisma.user.findUnique({
        where: { username: username }
      }); 
    } else {
      fetchedUsers = await prisma.user.findMany(); 
    }

    if (fetchedUsers) {
      res.status(200).json(fetchedUsers);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).end();
  }

}
