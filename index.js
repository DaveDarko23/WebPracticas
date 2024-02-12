const express = require("express")

const app = express();
const bodyParser = require('body-parser');

const port = 3010
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let users = [
    {id:1,name:"David"},
    {id:2,name:"Rangel"},
    {id:3,name:"Valdez"},
]

app.get('/', (req, res) => {
  res.send(users)
})

app.get('/addUser', (req, res) => {
    const { id, nombre} = req.query;
    users.push({id: parseInt(id), nombre})
    res.status(200).send({ id, nombre });
  });

  app.get('/updateUser', (req, res) => {
    const { id,nombre } = req.query;
    const user = users.find((us) => id == us.id)
    user.name = nombre;
    res.status(200).send({ id,nombre });
  });

  app.get('/deleteUser', (req, res) => {
    const { id } = req.query;
    users = users.filter((us) => id != us.id)
    
    res.status(200).send({ id });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
