import express from "express"
import fs from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const  app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) =>{
        if (err){
            console.error(err);
            res.status(500).send('Internal server error');
        } else {
            res.sendFile
            res.send(data)
        }
    })
});

export default app