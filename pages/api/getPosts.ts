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

    let fetchedPosts = [];

    if (username != "") {
      fetchedPosts = await prisma.post.findMany({
        where: { username: username }
      }); 
    } else {
      fetchedPosts = await prisma.post.findMany(); 
    }

    if (fetchedPosts) {
      res.status(200).json(fetchedPosts);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).end();
  }

}
