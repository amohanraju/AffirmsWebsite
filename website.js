const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/home.html", function(req, res){
  res.sendFile(__dirname + "/home.html");
})
app.get("/about-affirms.html", function(req, res){
  res.sendFile(__dirname + "/about-affirms.html")
})
app.get("/about-greenestep.html", function(req, res){
  res.sendFile(__dirname + "/about-greenestep.html");
})
app.get("/why-affirms.html", function(req, res){
  res.sendFile(__dirname + "/why-affirms.html");
})
app.get("/products.html", function(req, res){
  res.sendFile(__dirname + "/products.html");
})
app.get("/accounting.html", function(req, res){
  res.sendFile(__dirname + "/accounting.html");
})
app.get("/tax.html", function(req, res){
  res.sendFile(__dirname + "/tax.html");
})
app.get("/bill.html", function(req, res){
  res.sendFile(__dirname + "/bill.html");
})
app.get("/hr.html", function(req, res){
  res.sendFile(__dirname + "/hr.html");
})
app.get("/process.html", function(req, res){
  res.sendFile(__dirname + "/process.html");
})
app.get("/contact.html", function(req, res){
  res.sendFile(__dirname + "/contact.html");
})
app.post("/home.html", function(req, res){
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var companyName = req.body.company;
  var phoneNumber = req.body.phone;
  var email = req.body.email;
  var companySize = req.body.companysize;
  var numberOfLocations = req.body.locations;
  var annualTurnover = req.body.turnover;
  var message = req.body.subject;
  const data = {members:[{email_address: email, status: "subscribed",
  merge_fields:{FNAME: firstName, LNAME: lastName, PHONE: phoneNumber, COMPANY: companyName, EMPLOYEES: companySize, LOCATIONS: numberOfLocations, TURNOVER: annualTurnover, QUESTIONS: message}}]
};
const jsonData = JSON.stringify(data);

const url = "https://us14.api.mailchimp.com/3.0/lists/de9e1f4d8b";

const options = { method: "post", auth: "amohanraju:975da9440e52bb09372953fe70b1bf00-us14"}

const request1 = https.request(url, options, function(response){
  if(response.statusCode === 200){
    res.sendFile(__dirname + "/success.html");
  }
  else{
    res.sendFile(__dirname + "/failure.html");
  }
  response.on("data", function(data){
    console.log(JSON.parse(data));
  })
});

request1.write(jsonData);
request1.end();

});
app.post("/contact.html", function(req, res){
  var firstName = req.body.firstname;
  var lastName = req.body.lastname;
  var country = req.body.country;
  var companyName = req.body.company;
  var phoneNumber = req.body.phone;
  var email = req.body.email;
  var companySize = req.body.companysize;
  var numberOfLocations = req.body.locations;
  var annualTurnover = req.body.turnover;
  var message = req.body.subject;
  const data = {members:[{email_address: email, status: "subscribed",
  merge_fields:{FNAME: firstName, LNAME: lastName, PHONE: phoneNumber, COMPANY: companyName, EMPLOYEES: companySize, LOCATIONS: numberOfLocations, TURNOVER: annualTurnover, QUESTIONS: message, COUNTRY: country}}]
};
const jsonData = JSON.stringify(data);

const url = "https://us14.api.mailchimp.com/3.0/lists/de9e1f4d8b";

const options = { method: "post", auth: "amohanraju:975da9440e52bb09372953fe70b1bf00-us14"}

const request1 = https.request(url, options, function(response){
  if(response.statusCode === 200){
    res.sendFile(__dirname + "/success.html");
  }
  else{
    res.sendFile(__dirname + "/failure.html");
  }
  response.on("data", function(data){
    console.log(JSON.parse(data));
  })
});

request1.write(jsonData);
request1.end();

});
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
