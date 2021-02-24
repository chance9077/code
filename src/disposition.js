const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/download') {
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment')
    fs.readFile('./file.pdf', (err, data) => res.end(data))
  } else if (req.url === '/img') {
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Disposition', 'attachment')
    fs.readFile('./img.png', (err, data) => res.end(data))
  } else if (req.url === '/video') {
    res.setHeader('Content-Type', 'video/mp4')
    res.setHeader('Content-Disposition', 'attachment; filename="%E7%B4%A0%E6%9D%90.mp4"')
    fs.readFile('./video.mp4', (err, data) => res.end(data))
  } else {
    res.end(req.url)
  }
})

server.listen(8080, 'localhost', () => console.log('server running'))