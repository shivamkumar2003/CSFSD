const http=require('http');//server ko import kar liya hai
const axios=require('axios');
const port=3000;
const server=http.createServer(async (req,res)=>{
   res.writeHead(200,"content-type","text/html");
//    const response=await fetch("https://dummyjson.com/products");//this api gives promises
//    const jdata=await response.json();
    const response = await axios.get("https://dummyjson.com/products"); //this api gives promises
    const jdata = await response.data.products;
    let fronenddata = `<html><head></head><body>`;
    jdata.forEach((product)=>{
        fronenddata += `<div><img src="${product.thumbnail}"</div>`
    });
    fronenddata += `</body></html>`;
    res.end(fronenddata);
//    res.end(JSON.stringify(jdata));
});
server.listen(port,()=>{
    console.log(`Server is running on port no. ${port}`)
});
