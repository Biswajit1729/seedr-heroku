const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

let  getFile = async () => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.getVideos();
    //await seedr.deleteFile("file_id");
    
};
let  downlad = async (id) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.getFile(id);
    //
    
};
let  deleteFolder = async (fid) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.deleteFolder(fid);
    //
    
};

let  addMagnet = async (link) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login("mandalbis1729@gmail.com","Bm782403");
    return  await seedr.addMagnet(link);
    //
    
};


router.get('/', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    var value = await getFile(); 
    res.send(value);
})
router.get('/download', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const id = req.query.id
    var value = await downlad(id); 
    res.send(value);
})

router.get('/delete', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const fid = req.query.fid
    var value = await deleteFolder(fid); 
    res.send(value);
})
router.get('/magnetLink', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const link = req.query.link
    var value = await addMagnet(link); 
    res.send(value);
})

app.use('/',router);

app.listen(process.env.PORT ||  port, () => {
    console.log(`Example app listening on port ${port}!`)
});