const mongoose =  require("mongoose");

let mongoURL = "";
mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser: true});
let connection = mongoose.connection
connection.on("error", ()=>{
    console.log("Mongo DB connection Failed")
})
connection.on("connected", ()=>{
    console.log("Mongo DB connection Successful")
})
module.exports = mongoose