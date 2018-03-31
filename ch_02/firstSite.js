var http = require('http');

http.createServer(function(req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path) {
        case '':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Homepage');
                break;
        case '/about':
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('About');
                break;
        default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404, Page not found - ресурс не найден');
                break;
    }
}).listen(3000);

console.log('Сервер запущен на localhost:3000;нажмите Ctlr-C для завершения......');