const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

let  getFile = async (email,password,) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login(email, password);
    return  await seedr.getVideos();
    //await seedr.deleteFile("file_id");
    
};
let  downlad = async (email,password,id) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login(email, password);
    
    return  await seedr.getFile(id);
    //
    
};
let  deleteFolder = async (email,password,fid) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login(email, password);
    return  await seedr.deleteFolder(fid);
    //
    
};

let  addMagnet = async (email,password,link) => {

    var seedr = require("seedr");
    var seedr = new seedr();
    await seedr.login(email, password);
    return  await seedr.addMagnet(link);
    //
    
};


router.get('/', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    const email = req.query.e
    const password = req.query.p
    var value = await getFile(email,password); 
    res.send(value);
})
router.get('/download', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const id = req.query.id
    const email = req.query.e
    const password = req.query.p
    var value = await downlad(email,password,id); 
    res.send(value);
})

router.get('/delete', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const fid = req.query.fid
    const email = req.query.e
    const password = req.query.p
    var value = await deleteFolder(email,password,fid); 
    res.send(value);
})
router.get('/magnetLink', async function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,   Accept, x-client-key, x-client-token, x-client-secret, Authorization");

    const link = req.query.link
    const email = req.query.e
    const password = req.query.p

    var value = await addMagnet(email,password,link); 
    res.send(value);
})

app.use('/',router);

app.listen(process.env.PORT ||  port, () => {
    console.log(`Example app listening on port ${port}!`)
});