import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/pages/api/dbConfigure/prisma";
import bcrypt from "bcrypt";

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        username: string;
        email: string;
        image: string | null;
        name: string | null;
      };
    }
  
    interface User {
      id: string;
      username: string;
      email: string;
      image?: string;
      name?: string;
    }
  }
  

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { username: credentials?.username },
                });

                if (!user) {
                    throw new Error("No user found with provided username");
                }

                const isValid = await bcrypt.compare(
                    credentials?.password || "",
                    user.password
                );

                if (!isValid) {
                    throw new Error("Invalid password");
                }

                return { id: user.id, email: user.email, username: user.username, name: user.name, picture: user.profilePicture };
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) { 
            if (user) {
                token.id = user.id; 
                token.username = user.username; 
                token.email = user.email; 
                token.name = user.name;
                token.picture = user.image; 
            }
            return token;
        },

        async session({ session, token }) { 
            if (token) { 
                session.user.id = token.id as string;
                session.user.username = token.username as string;
                session.user.email = token.email as string; 
                session.user.name = token.name as string;
                session.user.image = token.picture as string; 
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});
