import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";   
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).end();
  }
 
  const {username, message, imageUrl} = req.body;  

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
        picture: imageUrl == null ? "N/A" : imageUrl
      },
    });
 
    return res.status(201).json({ message: "Post created" }); 
  } catch (err) {
    return res.status(404).end();
  }
} 
