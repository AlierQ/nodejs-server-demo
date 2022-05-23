var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号，例如：node server.js xxxx')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('接收到请求，请求路径为：' + pathWithQuery)

  if(path === '/'){
    // response 响应
    response.statusCode = 200  // 状态码
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`测试`)
    response.end()
  } else if(path === '/x'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`body{color: red;}`)
    response.end()
  } else {
    response.statusCode = 404  // 未知路径
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你想要访问的元素不存在！`)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n 可以通过该地址访问： http://localhost:' + port)
