// import clientPromise from "@/libs/mongoConnect";
// import {UserInfo} from "@/models/UserInfo";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { User } from "@/app/models/User";



export const authOptions = {
  secret: process.env.SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        await mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        if (passwordOk) {
          return user;
        }

        return null
      }
    })
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }