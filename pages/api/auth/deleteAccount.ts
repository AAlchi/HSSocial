import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/api/dbConfigure/prisma";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth"; 
import { Session } from "inspector";
import { authOptions } from "./[...nextAuth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != "DELETE") {
        return res.status(500).end();
    }  

    try {
        const session = await getServerSession(req, res, authOptions);
    
        if (!session) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        
        const userId = session.user.id as string;
        

        
        await prisma.user.delete({
          where: { id: userId },
        });

        return res.status(200).json({ message: "Account deleted" })
    } catch (err) {
        return res.status(500).end();
    }
}

