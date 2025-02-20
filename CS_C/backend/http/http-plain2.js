const http=require('http');
const fs=require('fs/promises');

const server=http.createServer(async (req,res) => {
    //  res.statusCode=200;
    //  res.setHeader('content-type','text/plain');
     res.writeHead(200,{'content-type':'text/html'});
     
     const data= await fs.readFile("./home.html","utf-8")
     res.end(data);
});
port=3000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});