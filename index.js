const express = require('express');
const app = express();
const PORT = 2000;

app.use(express.json());

app.listen(
    PORT
)

app.get('/pokemon', (req, res) => {
    res.json({
        pokemon: 'Pikachu',
        type: 'electric',
        img: 'e_pikachu.png'
    });
})