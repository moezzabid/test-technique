const express = require("express");
const app = express();
//const router =express.Router();
const request = require("request-promise");
const CryptoJS = require("crypto-js");
app.get('/test', async function (req, res) {
    var md5Hash = CryptoJS.MD5("2021-10-07T00:00:00Zdb9b1c3bff55b35c8d22009afeea7b9869b70aa7b8233b478dec2ee520f6342e25c9503c");   
    var p = "https://gateway.marvel.com/v1/public/characters?apikey=b8233b478dec2ee520f6342e25c9503c&hash="+md5Hash+"&ts=2021-10-07T00:00:00Z"

  
    console.log(req.body);
    const options = {
      method: 'GET',
      uri: p,

    }
  
    let resp = await request(options)
    var characters=JSON.parse(resp)['data']['results']
    res.json( JSON.parse(resp)['data']['results'])
    
  })

//declaration de port
var port = process.env.PORT || 5000;
app.listen(port, function () {
//affichage de console
 console.log("test technique ${port}");
});
