const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'Kick, Push, COAST!'});
});

server.get('/skaters', async (req, res) => {
    res.status(200)
})