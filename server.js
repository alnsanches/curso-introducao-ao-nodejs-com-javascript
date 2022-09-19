const http = require("http");
const port = 3000;
const stats = require("./pcRamUsage.js");

http.createServer((req, res) => {
        var url = req.url;
        if (url === "/stats") {//write a response
            res.end(JSON.stringify(stats, null, 2)); //end the response
        } else {
            res.end();
        }
    })
    .listen(port, () => (`Server is running in http://localhost:${port}`));