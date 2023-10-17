import { Request, Response } from "express";
import { isMobileNumber, isValidEmail } from "../utils/helper";
import {error_message, success_message} from "../utils/constants";
import { User } from "../../entity/user";
import { AppDataSource } from "../../DB/dataSource";
import bcrypt from "bcrypt";

const create_user = async (req: Request, res: Response) =>{
    try {
        const saltRounds  = 10;

        const {name, phoneNumber, email, password } = req.body;
        if(!isMobileNumber(phoneNumber.trim())){
            return res.status(400).send({
                status:400,
                data:{},
                message: error_message.IN_VALID_NUMBER
            });
        };

        if(!isValidEmail(email.trim())){
            return res.status(400).send({
                status:400,
                data:{},
                message: error_message.IN_VALID_EMAIL
            })
        };

        const salt = await bcrypt.genSalt(saltRounds);
        let pass_code  = await bcrypt.hash(password, salt);

        let saved_data = await AppDataSource.getRepository(User).save({
            name: name.trim(),
            user_phone_number: phoneNumber,
            email: email,
            passowrd: pass_code
        })
        //.getRepository(User);

        return res.status(201).send({
            status:201,
            data: saved_data,
            message: "Document inserteed successfully"
        })


    } catch (err : any) {
        console.log("Error in creating a new user", err);
        return res.status(500).send({
            status: 500,
            data:{},
            message: err.message
        })
    }
};

const get_users = async ( req: Request, res: Response) =>{
    try {
        
        const users = await AppDataSource.getRepository(User).find();

        return res.status(200).send({
            data:users,
            status: 200,
            message: success_message.DATA_FETCHED
        })

    } catch (error : any) {
        return res.status(500).send({
            status: 500,
            data:{},
            message:error.message
        })
    }
}

export {
    create_user,
    get_users
}
