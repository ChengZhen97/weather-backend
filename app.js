const express = require('express');
const app = express();
const port = 3000;
const request = require('request');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const http = require('http');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/v1/weather', authJWT, (req, res) => {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=corvallis&appid=a99f1dbe7d7e7d5b6ce85970a31da042'
  request(url, (error, response, body)=>{
    console.log(body);
    let json = JSON.parse(body);
    res.json(json);
  });

})

app.get('/v1/hello', authJWT, (req, res) => {
  const sayHello = "Hello world";
  res.json({sayHello});
})

app.post('/v1/auth', (req, res) =>{

  const username = req.body.username;
  const password = req.body.password;
  //console.log(username, password);
     if(username != "usr" || password != "pass"){
    res.send("not an authorized user");
  }else{
    const myToken = "eyJwYXNzd29yZCI6IlBhc3N3b3JkIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0NDE5MjE4OCwiZXhwIjoxNjQ0MTk1Nzg4fQ.YP0OKHcljuZf6X9V8tMimfcOrzTc63-ia9rRrgOA0eA"
    res.json({myToken});
  } 
  //res.sendStatus(200);
  res.json({requestBody : req.body})
});

const authJWT = (req, res, next) => {
  const headerInfo = req.headers;

  if(headerInfo != "eyJwYXNzd29yZCI6IlBhc3N3b3JkIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0NDE5MjE4OCwiZXhwIjoxNjQ0MTk1Nzg4fQ.YP0OKHcljuZf6X9V8tMimfcOrzTc63-ia9rRrgOA0eA"){
    return res.sendStatus(403);
  }

  next();
}

