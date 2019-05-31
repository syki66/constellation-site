var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname == '/'){
      if(queryData.id === undefined){

          fs.readdir('/data', function(error, filelist){
            fs.readFile(`data/index`, 'utf8', function(err, description){
              var title = "별자리 사이트";

              var list = '<ul>';
              var i = 0;
              while(i < filelist.length){
                list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
                i = i + 1;
              }
              var = list+'</ul>';

              var template = `
                <!doctype html>
                <html>
                  <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <h1><a href="/">별자리</a></h1>
                      ${list}
                      <h2>${title}</h2>
                      <p>${description}</p>
                    </div>
                  </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });

          })
      } else{
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">별자리</a></h1>
              <ul>
                <div id="menu_grid">
                  <li><a href="/?id=계절별 별자리">계절별 별자리</a></li>
                  <li><a href="/?id=북극성 찾기">북극성 찾기</a></li>
                  <li><a href="/?id=황도 12궁">황도 12궁</a></li>
                </div>
              </ul>
              <div id = "grid">
                <h2>${title}</h2>
                <p>${description}</p>
              </div>
            </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      }

    } else{
      response.writeHead(404);
      response.end('Not Found');
    }





});
app.listen(3000);
