const fs = require("fs");

const http = require("http");
const url = require("url");

const joylashuv = function () {
  const about = fs.readFileSync("./htmll/about.html", "utf-8");
  const contact = fs.readFileSync("./htmll/contact.html", "utf-8");
  const home = fs.readFileSync("./htmll/home.html", "utf-8");
  const login = fs.readFileSync("./htmll/login.html", "utf-8");
  return { about, contact, home, login };
};

const joy = joylashuv();

const server = http.createServer((req, res) => {
  const urlcha = req.url;
  if (urlcha === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(joy.about);
  } else if (urlcha === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(joy.contact);
  } else if (urlcha === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(joy.home);
  } else if (urlcha === "/login") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(joy.login);
  } else {
    res.end("<h1>salom qalaysan ishla zurmi ???</h1>");
  }
});

server.listen("4000", "127.0.0.1");

// const inpText = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inpText);

// const outputTxt = `SALOM QALAY ${inpText}`;

// fs.writeFileSync("./txt/output.txt", outputTxt);
// console.log("yozib boldim");

//async

// fs.readFile("./txt/input.txt", "utf-8", function (err, data) {
//   console.log(err);
//   console.log(data);
// });

// console.log("dossss.....");
