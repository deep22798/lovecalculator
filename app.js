const express=require("express");

const bodyParser=require("body-parser");

const app=express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

var a="hello";

app.get("/",function(req,res){
  res.render("index",{


  });
});

// function validateForm() {
//   let x = document.forms["newform"]["bname"].value;
//   let y = document.forms["newform"]["gname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }if (y == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

// if(validateForm()){}


app.post("/",function(req, res){
  var a= Math.floor(Math.random()*100)+1;
  var ab=req.body.bname;
  var ac=req.body.gname;

  // console.log(ab);

  res.render("sucess",{rando:a, bnamee:ab, gnamee:ac});
});

app.post("/",function(req,res){
  res.render("index",{});
});


//
// app.get("/", function(req, res){
//   $(newform).hide();
//   res.render("index",{});
// });







app.listen(3000,function(){
  console.log("Server is starting on port: 3000");
})
