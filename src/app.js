const express = require("express");
const path = require('path')
var hbs = require('hbs');

const app =express();

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../templates/assets')))
app.set("views",path.join(__dirname,'../templates/views'))
// register path to partials
hbs.registerPartials(path.join(__dirname,'../templates/partials'));


app.get("",(req,res)=>{
if(!req.query.location){
    return res.send({
        error:"Please pass loction paramter"
    })
}
    res.render('index',{
        title:"This is header",
        param: req.query.location
    })
})



app.listen("3000",()=>{
    console.log("The server is running in port 3000")
})