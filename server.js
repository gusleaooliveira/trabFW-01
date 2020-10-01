const express =  require('express');
const app = express();
const port = 3000;
const { createEngine } = require('express-react-views');
const mongoose = require('mongoose');
const rotaPacote = require('./routes/pacote');
const rotaUsuario = require('./routes/usuario');
const rotaViews = require('./routes/views');

mongoose.connect('mongdb://localhost/api_pacote',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("#######################");
    console.log("# BD Conectado!");
    console.log("#######################");
}).catch((error) => {
    console.error("#################################");
    console.error("# Erro ao conectar com o BD! ");
    console.error("#################################");
});

mongoose.Promise = global.Promise;

let options = {
    beautify: true
};

app.set('views', __dirname+'/views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine(options));
app.use('/static', express.static(__dirname+'/public'));

app.use('/api/usuario', rotaUsuario);
app.use('/api/pacote', rotaPacote);
app.use('/view/', rotaViews)


app.listen(port, ()=>{
    console.log(`Entrar: http://localhost:${port}`);
});