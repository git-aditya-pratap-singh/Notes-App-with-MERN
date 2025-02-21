
import mongoose, { Schema, Document, Model } from 'mongoose';

interface ILogin extends Document {
   
    name: string;
    email: string;
    password: string;
}

const loginSchema: Schema<ILogin> = new Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }  
});

const loginDB: Model<ILogin> = mongoose.model<ILogin>("login", loginSchema);
export default loginDB;
