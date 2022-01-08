// import express from 'express';
import * as express from 'express';
import {Request,Response} from 'express';
import * as path from "path";


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req:Request,res:Response){
    res.sendFile(path.resolve("./public/covid.html"));
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
});