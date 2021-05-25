const express= require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
// app.use()

fs.readdirSync("./routes").map( function(filename){       
   
    const module = require("./routes/" + filename);      
    const route = filename.replace(".js", "");

    app.use("/" + route, module);
});

app.listen(8081, console.log('Server Started...'));