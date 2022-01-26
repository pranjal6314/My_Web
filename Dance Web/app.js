const express=require("Express");
const path =require("path");
const fs=require("fs");
const app=express();
const port=80;
//EXPRESS   STUFF
app.use('/static',express.static('static'));//for serviving static file
app.use(express.urlencoded());//help in taking data from form

//PUG SPECIFIC STUFF
app.set('view engine','pug');//set template engine as pug
app.set('views',path.join(__dirname,'views'));//set the view directory
app.get('/',(req,res)=>{
    const con='this is a Dance web site';
    const params={'title':'Dance WebSite','contant':con};
    res.status(200).render('index.pug');
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
})
app.listen(port,()=>{
    console.log('live');
})
