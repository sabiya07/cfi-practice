import readlinesync from "readline-sync";


function base64encoding(){
let inputstring=readlinesync.question("enter the string you want to encode : ")
let splitstring=inputstring.split("");
console.log("the string is :" ,splitstring)
let ASCIICodes = splitstring.map((char) => char.charCodeAt());
console.log("the ASCII array is :",ASCIICodes);
let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
console.log("binary Codes:",binaryCodes);

    let binaryCode8Bit=binaryCodes.map((bin)=>{
    while (bin.length < 8) {
    bin= "0" + bin;
    }
    return bin;
})
    console.log("Binaries in 8 Bits are : ",binaryCode8Bit);
    let oneBinary=binaryCode8Bit.join("").split("");
    console.log(oneBinary);
    //Spliting into 6 Bits
    let binaryCode6Bit=[];
    while(oneBinary.length!=0){
        binaryCode6Bit.push(oneBinary.splice(0,6).join(""));
    }
    console.log("Binaries in 6 Bits are : ",binaryCode8Bit);
    //Padding and add =
let lastElement = binaryCode6Bit [binaryCode6Bit.length -1];
if(lastElement.length!=6){
var counter=0;
while(lastElement.length<6){
    lastElement = lastElement + "0";
    counter++;
}
binaryCode6Bit[binaryCode6Bit.length-1]=lastElement;
}
console.log( binaryCode6Bit);

let bintodecimal=binaryCode6Bit.map((str)=>parseInt(str,2));
console.log("base 64 decimals :",bintodecimal);

let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
let base64final=bintodecimal.map((dec)=>base64[dec]);
console.log("base 64 string:"+base64final);
if (counter==2){
    base64final.push("=");
}else if(counter==4){
    base64final.push("==")
}
let finalBase64String=base64final.join("");
console.log("Your Base 64 Output is : ", finalBase64String);
}
base64encoding();















