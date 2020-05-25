const chalk  = require('chalk');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./forecast');
const app = express();
const port = process.env.PORT || 3000;

const staticContent = express.static(path.join(__dirname, '../public'));
const partials = path.join(__dirname, '../templates/partials');
app.use(staticContent);
app.set("view engine", "hbs");
app.set('views', 'templates/views');
hbs.registerPartials(partials);
app.get("/", (req, res) => {
   res.render("index",{
       text:"Enter the location to get weather report."
   });
});

app.get("/about", (req, res) => {
    res.render("about",{
        title:"About"
    });
 });

 app.get("/help", (req, res) => {
    res.render("help",{
        title:"Help"
    });
 });

 app.get("/weather", (req, res)=>{
     let location = req.query.location ? req.query.location : 'amsterdam';
     forecast(location, (error, response)=>{
         if(error){
             return res.send(error);
         }
         res.send(response)
     })
 });

app.get("*", (req, res) => {
    res.render("404",{
        title:"Page Not Found"
    });
});

app.listen(port, () => {
    console.log(chalk.green.bold("Application is up and running on PORT : -" + port));
});