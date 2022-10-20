const fs = require("fs");

//////////// READING AND WRITTING FILES

//Blocking Synchronous way
/* const inputText = fs.readFileSync('./txt/input.txt', 'utf-8'); //Read file
const outputText = `this is what we know about the avocado ${inputText} \n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', outputText); //Write file
console.log('File written'); */

//No Blocking async way
/* fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  err
    ? console.log("Error!")
    : fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
        err ? console.log("ERROR!") : console.log(data2);
        fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
          err
            ? console.log("Error!")
            : fs.writeFile(
                "./txt/final.txt",
                `${data2}\n${data3}`,
                "utf-8",
                (err) => {
                  err
                    ? console.log("Error!")
                    : console.log("File has been written");
                }
              );
        });
      });
});
console.log("Reading file ..."); */
