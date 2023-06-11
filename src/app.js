import express from "express"
import fs from "fs"

const  app = express();

app.get("/", (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) =>{
        if (err){
            console.error(err);
            res.status(500).send('Internal server error');
        } else {
            res.send(data)
        }
    })
});

export default app