const express = require('express');
const requestIp = require('request-ip');

const app = express();

app.use(requestIp.mw());

app.get('/', function (req, res) {
    const clientIp = requestIp.getClientIp(req);
    console.log(`The client IP is: ${clientIp}`);

    
    res.redirect('https://www.apple.com');
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});
