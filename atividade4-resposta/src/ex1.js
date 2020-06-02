const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/texto.txt', express.static('../public/texto.txt'));
app.use('/arquivo/txt', express.static('../public/texto.txt'));

app.listen(3101, ()=> {
    console.log('Rodando....');
});

app.get('/',  (req, res)=> {
    res.send('caminho raiz');
  });

  //curl http://localhost:3101/somar/5/10
app.get('/somar/:x/:y',  (req, res)=> {
    let x = req.params.x;
    let y = req.params.y;

    x = parseInt(x);
    y = parseInt(y);
    res.send(x+y + '');

});

//curl -X GET -d "x=12&y=4" http://localhost:3101/diff
app.get('/diff', (req,res)=>{
    let {x,y} = req.body;

    x = parseInt(x);
    y = parseInt(y);
    res.send(x-y + '\n');

});

//curl -X POST -d "x=12" http://localhost:3101/diff/4
app.post('/diff/:y', (req,res)=>{
    let {x} = req.body;
    let y = req.params.y;

    x = parseInt(x);
    y = parseInt(y);
    res.send(x-y + '\n');

});

//curl -X POST -d "x=2&y=5" http://localhost:3101/pow
//curl -X GET -d "x=2&y=5" http://localhost:3101/pow
//curl -X PUT -d "x=2&y=5" http://localhost:3101/pow
//curl -X DELETE -d "x=2&y=5" http://localhost:3101/pow
app.all('/pow', (req,res)=>{
    let {x,y} = req.body;
    

    x = parseInt(x);
    y = parseInt(y);
    res.send(x**y + '\n');

});

app.use((req,res)=>{
    res.send('Caminho inexistente\n');
});

