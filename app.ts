import express,{Request, Response} from "express";
import { AppDataSource } from "./DB/dataSource";

import * as moment from 'moment-timezone';

// Create a moment object in the Indian Standard Time zone (Asia/Kolkata)
const istMoment = moment.tz('Asia/Kolkata');

// Get the current date and time in IST
const istTime = istMoment.format();

console.log('Current time in IST:', istTime);

// Optional: Format the timestamp in a specific way
const formattedIST = istMoment.format('MMMM Do YYYY, h:mm:ss a');



const app = express();
const port : number = 5050;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.get('/test', (req: Request, resp: Response) =>{
    resp.send({data:"Test Done"});
});

app.use('*', (req: Request, res: Response) =>{
    return res.status(404).send({
        status:404,
        data:{formattedIST, istTime, istMoment  },
        message:'Not Found'
    })
})

app.listen(port, ():void =>{
    console.log(`Server is running on ${port}`);
})