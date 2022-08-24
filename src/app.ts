import express, { Request, Response} from "express";
const app = express();

app.get("/", (req: Request,res: Response)=> {
        res.json({
            message:"hey"
        })
})
app.listen(3001, ()=> {
        console.log("Server started on port 3001")
    });