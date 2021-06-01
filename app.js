var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/convertFile', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const name = req.body.filename;
  console.log(name);
  if(convertFile(name)){
    res.end("OK");
  }
  
  
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})


function convertFile(fileName){
  var docxConverter = require('docx-pdf');

  docxConverter(fileName,'./output.pdf',function(err,result){
    if(err){
      console.log(err);
    }
  });
  return true;

}