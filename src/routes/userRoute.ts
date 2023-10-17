import express from "express";
const route = express.Router();

import { create_user, get_users } from "../controllers/user.controller";

route.post('/createUser',create_user );

route.get('/getUsers', get_users);

export {
    route
}