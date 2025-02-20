import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/dbConfigure/prisma";  
import FormData from "form-data";
import axios from "axios";
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).end();
  }
 
  const {username, message} = req.body;  

  try {  

    const fetchedUser = await prisma.user.findUnique({
      where: { username },
    });

    if (!fetchedUser) {
      return res.status(404).json({ error: "User not found" });
    } 

    const add = await prisma.post.create({
      data: {
        message: message,
        username: username,
        picture: "imageUrl"
      },
    });
 
    return res.status(201).json({ message: "Post created" }); 
  } catch (err) {
    return res.status(404).end();
  }
} 
