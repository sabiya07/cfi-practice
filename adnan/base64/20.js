import readlineSync from "readline-sync";
function base64Encoding(){
    //step : 1 Accept String Input
    let inputString=readlineSync.question("Enter the String you want to Encode: ")
    // Split Characters
    let splitString=inputString.split("");
    console.log("The String is : ",splitString);
    //Get ASCII Decimals
    let ASCIICodes = splitString.map((char) => char.charCodeAt());
    // let ASCIICodes=splitString.map(function(char){
        //return char.charCodeAt();
        //})
    console.log("The ASCII Array is : ", ASCIICodes);
    //COnverting Decimal ASCII to Binary
    let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
    console.log("Binary Codes: ",binaryCodes);
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
    console.log("Binaries in 6 Bits are : ", binaryCode6Bit);
    let bintoDecimal=binaryCode6Bit.map((str)=>parseInt(str,2));
    console.log("Base 64 Decimals : ", bintoDecimal);
   let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Decimal to Base 64
    let base64final=bintoDecimal.map((dec)=>base64[dec]);
    console.log("Base 64 String : ", base64final);
    if (counter==2){
        base64final.push("==");
    }
    let finalBase64String=base64final.join("");
    console.log("Your Base 64 Output is : ", finalBase64String);
    }
base64Encoding();







