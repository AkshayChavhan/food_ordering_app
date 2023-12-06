import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (pass?.length === 0 || pass?.length <= 6) {
                new Error('Password must have at least 6 characters.');
            }
        }
    }
},{ timestamps : true});


userSchema.post('validate', async (user) => {
    try {
        const saltRounds = 10;
        const myPlaintextPassword = user.password;
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
        user.password = hash;
    } catch (error) {
        throw new Error("Error occurs while hashing password.");
    }
});


export const User = model?.User || model('User', userSchema);