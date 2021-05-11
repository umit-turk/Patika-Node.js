const http = require('http');
//bir web sunucusu oluşturmak için http modulüne ait olan createserver() metodunu kullanıyoruz.
const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>anasayfa</h1>');
    }else if(url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('hakkımızda')
    }else if(url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('iletişim')
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h2>404 sayfa bulunamadı</h2>')
        
    }

    
    res.end();
});//callback fonk parametresi olarak request ve response kullanıyoruz

//3000 numaralı port'u kullanıyoruz
const port = 3000;

server.listen(port, ()=> {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});