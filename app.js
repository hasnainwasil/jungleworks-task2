const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const userRouter=require("./api/users/user.router.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());

// app.get("/api",(req,res) =>{
// 	res.json({
// 		success:1,
// 		message:"This is api working"
// 	});
// });

app.use('/api/users',userRouter);

var PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
	console.log("Server Has Started");
});