var koa = require('koa')(),
        koaBody = require('koa-body')(),
        cors = require('koa-cors')(),
        enforceHttps = require('koa-sslify'),
        fs = require('fs'),
        https = require('https')

// SSL options
var options = {
  key: fs.readFileSync('ssl.key'),
  cert: fs.readFileSync('ssl.crt')
}


var app =
koa
//.use(koassl)
.use(cors)
.use(koaBody)
.use(function* (next) {
        console.log(this.request.body);
        this.body = "echo of " + JSON.stringify(this.request.body)
})
//.listen(8000);
