const express = require('express');
const repoContent = require('./repository/repository-wrapper');
const app = express();

app.listen(3000, function () {
    console.log("server started. Listening on port 3000.");
});

