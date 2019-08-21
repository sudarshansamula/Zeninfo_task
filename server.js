var express = require('express');
var router = require('./router')
var http = require('http');

var config={
	PORT:process.env.PORT||5001
}
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.get('/', (req, res, next) => {
  return res.json({ success: true, data: { status: 200, message: 'Zeninfo3 Solutions task  is now available.' } });
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404);
});
var server = http.createServer(app);
server.listen(config.PORT);
console.log("Server started at PORT "+config.PORT)

module.exports=  app;
