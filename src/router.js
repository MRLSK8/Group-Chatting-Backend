const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
  res.json({ 
    author: 'Marcelo Lima',
    github: 'https://github.com/MRLSK8',
    lastUpdate: '17/04/2021',
    Project: 'Group Chatting API',
    Version: '1.0.0',
    Status: 'Online',
  });
});

module.exports = routes;
