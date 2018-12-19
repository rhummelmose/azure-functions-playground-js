const createAzureFunctionHandler = require("azure-function-express").createAzureFunctionHandler;
const express = require("express");

const app = express();

app.get("/api/express/:foo/:bar", (req, res) => {
    console.log("Express function successfully triggered..");
    res.json({
        foo  : req.params.foo,
        bar  : req.params.bar
    });
});

module.exports = createAzureFunctionHandler(app);
