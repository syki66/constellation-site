var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
      var template = `

      <!DOCTYPE html>
      <html>
        <head>


          <style>
            body{
              background-color: black;
              color: yellow;
            }

            h1{
              text-align: center;
              font-size: 100px;
              padding: 0px;
              margin: 0px;
              color:yellow;
            }

            ul{
              list-style:none;
              margin:0;
              padding:0;

              margin-bottom: 30px;

              font-size: 30px;

              margin-left: auto;
              margin-right: auto;
            }

            li{
              margin: 0px;
              padding: 20px;
              text-align: center;
              border: 2px solid yellow;
            }

            a{
              text-decoration:none;
              color: yellow;
            }

            select{
              background: yellow;
              color:black;
              font-size: 20px;
              padding: 10px;
              width: 150px;
              height: 50px;
              border: none;
              -webkit-appearance: button;
              outline: none;
            }

            img{
              border-right: 1px solid yellow;
              padding-right:10px;
            }

            p{
              padding-left: 20px;
            }

            #grid{
              display:grid;
              grid-template-columns: 1fr 1fr;
            }

            #menu_grid{
              display:grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              border: 2px solid yellow;
            }
          </style>


          <title>오늘은 무슨별자리?</title>
          <meta charset="utf-8">
          <link rel="stylesheet" href="public/css/style.css">
        </head>
        <body>
          <h1><a href="index.html">별자리</a></h1>
          <ul>
            <div id="menu_grid">
              <li><a href="12star.html">12 별자리</a></li>
              <li><a href="">계절 별자리</a></li>
              <li><a href="">핫한 별자리</a></li>
              <li><a href="">운세</a></li>
              <li><a href="">퀴즈</a></li>
            </div>
          </ul>
          <p>
            ${description}
          </p>

        </body>
      </html>
      `;
      response.end(template);
    })

});
app.listen(3000);
