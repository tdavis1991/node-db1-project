const express = require("express");

const db = require("../data/dbConfig.js");
const accounts = require('../account/accountRouter');

const server = express();

server.use(express.json());

server.use('/', accounts);

server.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Something went wrong'
    })
});

module.exports = server;
