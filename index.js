const express = require("express");
const app = express();

const User = require("./model/schema");
const sequelize = require("./model/db");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

sequelize.sync({force:true});

app.get('/show', (req,res) => {
    User.findAll().then(data => res.send(data));
});

app.post('/data', (req,res) => {
    User.create({name: req.body.name}).then(data => res.send(data));
});

app.get('/show/:id', (req,res) => {
    User.findAll({
        where:{
            id:req.params.id
        }
    }).then(data => res.send(data));
})

app.delete('/delete/:id', (req,res) => {
    User.destory({
        where:{
            id:req.params.id
        }
    }).then(data => res.send(data));
})

app.put('/edit', (req,res) => {
    User.update({name: req.body.name},{
        where:{
            userid:req.body.userid
        }
    }).then(data => res.send(data));
})

app.listen(5000); 