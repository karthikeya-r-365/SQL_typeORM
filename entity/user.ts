import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

import * as moment from 'moment-timezone';

// Create a moment object in the Indian Standard Time zone (Asia/Kolkata)
const istMoment = moment.tz('Asia/Kolkata');

// Get the current date and time in IST
const istTime = istMoment.format();

/*
    @Entity() -> This decorator is used to mark classes that will be an entity (table or document depend on database type). Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
    @Column -> Column decorator is used to mark a specific class property as a table column. Only properties decorated with this decorator will be persisted to the database when entity be saved.
*/

@Entity()
export class User {

   @PrimaryGeneratedColumn()
    id! :Number;

    // Initialize Properties in the Constructor
    // You can initialize your properties in the constructor. Here's how you can do it:
    @Column({default: "guset"})
    name:String  = "";

    //Use the ! Non-null Assertion Operator
    //You can use the non-null assertion operator ! to tell TypeScript that you're certain that the properties will be initialized before they are used:
    @Column({
        unique: true,
    })
    user_phone_number! :string;

    @Column({
        unique: true,
    })
    email! : String;

    @Column({
        default: false
    })
    verify_number! : Boolean;

    @Column({
        default: false
    })
    verify_email! : Boolean;

    @Column()
    passowrd! : String;

    @Column({
        default: istTime
    })
    created_at! : Date

    @Column({
        default: null
    })
    updated_at! : Date
};