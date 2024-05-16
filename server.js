//! Vanilla Node.js ile Http API

//http modülünü içe aktar
const http = require('http')

//bir http sunucusu oluştur ve istekleri işle
const server = http.createServer((req,res)=>{
if(req.url === "/"){
    // http durumunu ve headerını ayarla
    res.writeHead(200, {"Content-Type": "application/json"})
    //cevap gönder
    res.end(JSON.stringify({message: 'Serverdan merhabalar'}))
}

if(req.method === "POST" && req.url === "/new"){
    // http durumunu ve headını ayarla
    res.writeHead(201, {"Content-Type": "application/json"})

    //cevap gönder
    res.end(JSON.stringify({message: 'Başarıyla Eklendi'}))
}
})

//port 3000 üzerinde dinle
server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server 3000.portu dinlemeye başladı.")
})