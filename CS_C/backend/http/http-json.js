const http=require('http');
const fs=require('fs/promises');
// const users = [
//   {
//     id: 1,
//     name: "shivam",
//     email: "shivam@gmail.com",
//   },
//   {
//     id: 2,
//     name: "satyam",
//     email: "satyam123@gmail.com ",
//   },
//   {
//     id: 3,
//     name: "ram",
//     email: "ram@gmail.com",
//   },
// ];
const server=http.createServer(async (req,res) => {
     res.writeHead(200,{'content-type':'application/json'});
     const data=await fs.readFile("./aa.json",'utf-8');
     const jsdata=JSON.parse(data);
    //  const userdata=users.map((user)=>{
    //     return user.name
    //  })

    // let userdata ="" 
    // users.foreach((user) => {
    //   userdata+= user.name;
    // });
     res.end(JSON.stringify(jsdata));
     
});
port=3001;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});