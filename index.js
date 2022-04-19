const fs = require("fs");

// const inpText = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inpText);

// const outputTxt = `SALOM QALAY ${inpText}`;

// fs.writeFileSync("./txt/output.txt", outputTxt);
// console.log("yozib boldim");

//async

fs.readFile("./txt/input.txt", "utf-8", function (err, data) {
  console.log(err);
  console.log(data);
});

console.log("dossss.....");


