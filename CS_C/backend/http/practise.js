// const http = require("http");
// const fspromises = require("fs/promises");
// const server = http.createServer(async (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   if (req.url == "/about") {
//     res.end("<h1>Hello World</h1>");
//   } else if (req.url == "/error") {
//     const a = await fspromises.readFile("./aa.json",'utf-8');
//     res.end(a);
//   } else {
//     const a = await fspromises.readFile("./home.html",'utf-8');
//     res.end(a);
//     // res.end("<h1 style='color:red'>Error..No, Data Associated with /msg</h1>");
//   }
// });
// server.listen(3003, () => {
//   console.log("Server running on", 3003);
// });

const http = require("http"); //server ko import kar liya hai
const axios = require("axios");
const port = 3001;
const server = http.createServer(async (req, res) => {
  res.writeHead(200, "content-type", "text/html");
  //    const response=await fetch("https://dummyjson.com/products");//this api gives promises
  //    const jdata=await response.json();
  const response = await axios.get("https://api.github.com/search/users", {
    params: {
      q: "location:ghaziabad",
    },
  }); //this api gives promises

  const jdata = response.data.items;
  let fronenddata = `<html><head></head><body>`;
  jdata.forEach((product) => {
    fronenddata += `<div><img src="${product.avatar_url}"</div>`;
  });
  fronenddata += `</body></html>`;
  res.end(fronenddata);
  //    res.end(JSON.stringify(jdata));
});
server.listen(port, () => {
  console.log(`Server is running on port no. ${port}`);
});
