import express,{Request, Response} from "express";
import { AppDataSource } from "./DB/dataSource";

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
        data:{},
        message:'Not Found'
    })
})

app.listen(port, ():void =>{
    console.log(`Server is running on ${port}`);
})