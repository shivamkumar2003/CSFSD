// const fspromises=require("fs/promises");

// const read= async()=>{
//      try {
//         const data = await fspromises.readFile("./dta.txt", "utf-8");
//         console.log(data);
        
//      } catch (error) {
//         console.log(error.message)
//      }
// }
// read();
// console.log("first")

//for write operation
const fspromises = require("fs/promises");

const write = async () => {
  try {
    const newdata="This is my new work"
     await fspromises.writeFile("./data2.txt",newdata, "utf-8");
    
  } catch (error) {
    console.log(error.message);
  }
};

write();
console.log("first");