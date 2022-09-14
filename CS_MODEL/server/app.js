import http from "http";
import url from "url"
import {StringDecoder} from "string_decoder"

const port = 5000;

const server=http.createServer((req ,res)=>{
//GET the URL and parse it
const parsedURL = url.parse(req.url,true);
console.log(parsedURL)
const path=parsedURL.path;
const trimmedpath=path.split('/').filter((ele)=>ele!="").join('/');
console.log(trimmedpath);
const method=req.method;
console.log(method);
const queryobjects=parsedURL.query;
console.log(queryobjects);
const decoder=new StringDecoder('utf-8');
let bodybuffer='';
req.on ('data' ,(data)=>{
    bodybuffer+=decoder.write(data)
})
req.on('end' ,()=>{
    bodybuffer+=decoder.end();
    console.log(bodybuffer);
    res.end("this is a simple http server")
}
)
    // let i=0;
    // console.log(i);
    // i++;
    // console.log(req.headers)
// res.end("this is asimple server");





})
server.listen(port, ()=>{
    console.log("server started at port", port)
}
)
