const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url)
    if(req.url === '/'){
            res.end('Welcome......')
    
    }
    if(req.url ==='/about' ){
            res.end('Welcome...... about')

    }
        res.end(`
           <div>
               <h1>Oooops we cant find the page you are looking for</h1>
            <a href="/">Back to Home</a>
            </div>`
        )
})

server.listen(3000)