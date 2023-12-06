import { User } from "@/app/models/User";
import mongoose from "mongoose"

export async function POST( req ){
    const body = await req.json();
    await mongoose.connect(process.env.MONGO_URI);
    console.log("body => ", body)
    const createUser = await User.create(body);
     
    return Response.json({ messsage : 'User created successfully' , info : createUser});
}