const express = require('express');

const Skaters = require('../skaters/skaterModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'Kick, Push, COAST!'});
});

server.get('/skaters', async (req, res) => {
    const skater = await Skaters.all();
    res.status(200).json(skater)
});

server.post('/skater', async (req, res) => {
    try{
        const skater = await Skaters.insert(req.body);
        res.status(201).json({skater})
    } catch (e) {
        res.status(500).json(e)
    }
})

server.delete('/skater/:id', async (req, res) => {
    try{
        await Skaters.remove(id)
        res.status(202).json({message: 'Skater retired'})
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = server;