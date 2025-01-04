const http = require('http');
/*const server = http.createServer((req,res) =>{
    swit
});

server.listen(8000, () =>{
    console.log("server is running on port")
})  */

const server = http.createServer((req,res) => {
    switch (req.url) {
        case "/":
           res.end("anasayfa") 
            break;

            case "/about":
                res.end("hakkımda") 
                 break;
    
        default:
            res.end("404")
            break;
    }
})

server.listen(8000, () =>{console.log("server is running on port")});