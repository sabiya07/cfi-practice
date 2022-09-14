import readlinesync from "readlinesync"
import fs from "fs"

let filedata;

fs.readFile("tasks.json" ,(err , data) => {
   if (err) throw err;
   console.log(data)
   filedata=JSON.parse(data);
//console.log("UP" ,filedata)
console.log(taskname);
filedata.push(taskname)
console.log(filedata)
console.table(filedata)
filedata=JSON.stringify(filedata);
fs.writeFile("tasks.json" ,filedata,(err) =>{
    if(err) throw errconsole.log("task added successfully");
})

})