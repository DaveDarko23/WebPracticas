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

const o = {id:"Hola", nombre:"DSFDS"}

app.get('/', (req, res) => {
  res.send(users)
})

app.get('/getOnlyUser', (req, res) => {
    const { id } = req.query;
    const user = users.find((us) => id == us.id)
    res.send(user)
  })

app.post('/addUser', (req, res) => {
    const { id, name} = req.body;
    users.push({id: parseInt(id), name})
    res.status(200).send({ id, name });
  });

  app.patch('/updateUser/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find((us) => id == us.id)
    user.name = name;
    res.status(200).send({ id,name });
  });

  app.delete('/deleteUser/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((us) => id != us.id)
    
    res.status(200).send({ id });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
