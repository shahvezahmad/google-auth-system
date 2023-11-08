const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
app.use(express.json());
app.use(cors());

const connecttodb = require('./config/database'); 
connecttodb();

app.listen(port,()=>{
    console.log("Listening to Port-",port);
});