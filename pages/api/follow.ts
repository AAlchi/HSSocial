import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/dbConfigure/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(500).end();
  }

  try {
    const update = await prisma.user.update({
      where: { id: req.body.userId },
      data: {
        followers: { push: req.body.followUsername },
      },
    });

    res.status(200).json(update);
  } catch (err) {
    res.status(500).end();
  }
}
