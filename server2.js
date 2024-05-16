// Express modülünü çağır
const express = require("express")

// Bir Express uygulaması oluştur
const app = express()

//Bir rota tanımla ve isteği işle
app.get('/', (req,res)=>{
    //durum kodu 200, content type header olan cevap gönder
    res.status(200).json({message: 'Serverdan merhabalar'})
})

//Farklı bir rota tanımı
app.post('/new', (req,res)=>{
      //durum kodu 201, content type header olan cevap gönder
      res.status(201).json({message: 'Başarıyla oluşturuldu.'})
})

//Port 3001 üzerinde dinle
app.listen(3001,()=>{
    console.log('Server 3001.portu dinlemeye başladı.')
})