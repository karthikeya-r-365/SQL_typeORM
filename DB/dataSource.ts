import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import config from "../config/ormconfig";

dotenv.config()

export const AppDataSource = new DataSource(
    {
    type: "mysql", //process.env.TYPE not working throwing type error though it is logging correct value
    host: process.env.HOST || config.host,
    port: 3306, //process.env.port not working throwing type error though it is loggingcorrect value
    username: process.env.USER_NAME || config.username,
    password: process.env.PASSWORD, // || config.password, // config.password nnot working throwing type error though it is logging correct value
    database: process.env.DATABASE || config.database,
   // entities:[User],
    entities:["./entity/*.ts"],
    synchronize: true,
    logging: true,
    migrationsTableName:"custom_migration_table",
    migrations: ["migrations/*.{ts,js}"],
    //@ts-ignore
    cli:{
        migrationsDir:"migrations"
    }
    
}
);