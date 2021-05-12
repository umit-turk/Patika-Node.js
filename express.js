const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.status(200).send('Anasayfa')
})
 
app.get('/about', (req, res) => {
    res.status(200).send('Hakkimizda')
  })

  app.get('/contact', (req, res) => {
    res.status(200).send('Iletisim')
  })

  app.get('*', (req, res) => {
      res.status(404).send('404 sayfa bulunamadi')
  })

  const port = 3000;

  app.listen(port, ()=> {
    console.log(`sunucu port ${port} da çalışmaya başladı`)
  })