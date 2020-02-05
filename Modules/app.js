const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers)

    let url = req.url
    let method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html><head></head><body><form method="POST" action="/message"><input type="text" name="message"><button type="input">Send</button></form></body></html>')
        return res.end()
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]
            fs.writeFileSync('message.txt', message)
        })

        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html><head></head><body><h1>Teste</h1></body></html>')
    res.end()
})

console.log("Start server port 3000")
server.listen(3000)