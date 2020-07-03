var staticServer = require('static-server');
const { start } = require('repl');
var server = new staticServer({
    rootPath:'./dist/',
    port: 7000
});

server.start(function(){
    console.log("server is atarted At",server.port)
})