import NextAuth, { NextAuthOptions } from "next-auth";
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
        accountCreated: string;
        accountUpdated: string;
        followers: string[];
        following: string[];
      };
    }
  
    interface User {
      id: string;
      username: string;
      email: string;
      image?: string;
      name?: string;
      accountCreated: string;
      accountUpdated: string;
      followers: string[];
      following: string[];
    }
  }
  
export const authOptions: NextAuthOptions = {
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

                return { 
                    id: user.id, 
                    email: user.email, 
                    username: user.username, 
                    name: user.name, 
                    image: user.profilePicture, 
                    accountCreated: user.dateCreated.toISOString(), 
                    accountUpdated: user.dateUpdated.toISOString(),
                    followers: user.followers,
                    following: user.following
                };
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
                token.accountCreated = user.accountCreated;
                token.accountUpdated = user.accountUpdated;
                token.following = user.following;
                token.followers = user.followers;
            }
            return token;
        },

        async session({ session, token }) { 
            if (token) { 
                session.user = {
                    id: token.id as string,
                    username: token.username as string,
                    email: token.email as string, 
                    name: token.name as string,
                    image: token.picture as string, 
                    accountCreated: token.accountCreated as string,
                    accountUpdated: token.accountUpdated as string,
                    followers: token.followers as string[],
                    following: token.following as string[],
                };
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

