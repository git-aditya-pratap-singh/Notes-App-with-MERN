import { Request, Response } from 'express';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import asyncHandler from '../utils/asyncHandler';
import AlertService from '../helpers/AlertService';
import loginDB from '../models/login.schema';
import Password_Encrypt_Decrypt from "../helpers/PswdEncrypt";


dotenv.config();
const AUTH_PASSWORD = new Password_Encrypt_Decrypt();

class LoginControllers extends AlertService {

    public Login = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        
        const { email, password } = req.body;
        const userValid = await this.GetuserByloginPass(email);
        if (!userValid)
            return this.sendErrorResponse(res, false, "User not found !!");

        const pswdMatch: boolean = await AUTH_PASSWORD.passwordDecrypt(password, userValid.password);
        if (!pswdMatch)
            return this.sendErrorResponse(res, false, "Invalid Password !!");
      
        const token: string = await this.createJWTToken(userValid);

        const UserInfo = {
            name: userValid.name,
            email: userValid.email
        }

        return this.sendSuccessResponse(res, true, "Logged-In Successfully!", {UserInfo, token})
    });

    private GetuserByloginPass = async (email: string): Promise<any | null> => {
        const userMatch: any | null = await loginDB.findOne({ email: email },
            { _id: 1, name: 1, email: 1, password: 1 }
        );
        return userMatch;
    };

    private createJWTToken = async (userValid: any): Promise<string> => {
    
        const payload: any = {
            _id: userValid._id,
            name: userValid.name,
            email: userValid.email,
        };
        const token: string = jwt.sign(
            payload,
            process.env.TOKEN_SECRET_KEY as string,
            {
                expiresIn: Number(process.env.TOKEN_EXPIRY_TIME) || "1h"
            }
        );
        return token;
    };



}
export default LoginControllers;