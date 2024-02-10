import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

var app = express();
app.use(express.static('styles'));
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get("", (req, res, next) => { 
  // show the page
     const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const _retfile = path.join(__dirname, 'index.html');
 
  res.sendFile(_retfile);
 });
 app.get("/aboutus", (req, res, next) => { 
   // show the page
      const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   const _retfile = path.join(__dirname, 'aboutus.html');
  
   res.sendFile(_retfile);
  });
