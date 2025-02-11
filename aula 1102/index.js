const express = require('express');

const app = express()

const port = 3000;

app.get('/', (req, resp) => {
    resp.send('pagina principal');
})

app.get('/home', (req, resp) => {
    resp.send('pagina home');
})

app.get('/login', (req, resp) => {
    resp.send('pagina de login');
})














        



app.listen(port, ()=>{
    console.log('servidor rodando na porta', port)

} 
)
    