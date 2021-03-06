const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando database
mongoose.connect('mongodb+srv://deploy:poi098zxc123@cluster0-rcnxn.mongodb.net/test?retryWrites=true&w=majority', { dbName: 'nodeapi' });
requireDir('./src/models');

//const Product = mongoose.model('Product');


//Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);