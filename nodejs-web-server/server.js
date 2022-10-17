const http = require('http'); 

const server = http.createServer((request,response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
 
    const {method, url} = request

    if(url === '/') {
        if (method === 'GET') {
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'Ini adalah homepage'
            }))
        }else{
            response.statusCode = 400
            response.end(JSON.stringify({
                message: 'Halaman tidak dapat diakses dengan <any> request'
            }))
        }
    } else if(url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about'
            }))
        }else if (method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about</h1>`
                }));
            });
        }else{
            response.statusCode = 400
            response.end(JSON.stringify({
                message: 'Halaman tidak dapat diakses dengan <any> request'
            }))
        }
    } else {
        response.statusCode = 404
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!'
        }))
    }
    
    // if (method === 'GET') {
    //     response.end('<h1>Halo HTTP Server!</h1>');
    // }
    // if (method === 'POST') {
    //     let body = [];
    
    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });
       
    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}!</h1>`);
    //     });
    // }
})

server.listen(5000,'localhost',() => {
    console.log('Server berjalan pada http://localhost:5000');
})