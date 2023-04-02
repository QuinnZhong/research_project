import express from 'express';
const router = express.Router();
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/musicLink', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/musicLink.html'));
})

router.get('/movieLink', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/movieLink.html'));
})

  
router.get("/video", function (req, res) {
    
    console.log(req.assets);

    const moviePath = path.join(__dirname, '../', video.path);
    const movieSize = fs.statSync(moviePath).size;
    console.log(movieSize)
  
    const mainSize = 5 * 10 ** 5;
    const start =  Number(range.replace(/\D/g, ""));
    const end = Math.min(start + mainSize, movieSize - 1);
    console.log(start,end);
  
    const movieLength = end - start + 1;
    const assets = {
      "Range": `bytes ${start}-${end}/${movieSize}`,
      "Length": movieLength,
      "Type": "movie/mp4",
    };
    res.writeHead(206, assets);
  });

  router.get("/audio", (req, res) => {
    axios
      .get(INPUT, {
        responseType: "stream",
        adapter: httpAdapter,
        "Range": "bytes 16561-8065611",
      })
      .then((Response) => {
        const audData = Response.data;
  
        res.set("type", "audio/mp3");
        res.set("length", Response.assets["length"]);
        console.log(Response);
  
        audData.on("data", (chunk) => {
          res.write(chunk);
        });
  
        audData.on("end", () => {
          res.end();
        });
      })
      .catch((Err) => {
        console.log(Err.message);
      });
  });
  
export default router;