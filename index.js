const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World from node')
})

const users = [
    { id: 0, name: 'Forhad', email: 'abc@gmail.com', phone: '001256' },
    { id: 1, name: 'aive', email: 'abc@gmail.com', phone: '001257' },
    { id: 2, name: 'Sarim', email: 'abc@gmail.com', phone: '001258' },
    { id: 3, name: 'Akbar', email: 'abc@gmail.com', phone: '001250' },
    { id: 4, name: 'Nahar', email: 'abc@gmail.com', phone: '001253' }
]


app.get('/users', (req, res) => {

    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLoweCase().includes(search))

        res.send(searchResult)
    }

    else {
        res.send(users);
    }

});

// POST method

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})


// Dynamic API
app.get('/users/:id', (req, res) => {

    const id = req.params.id;

    res.send(users[id]);
})

app.listen(port, () => {
    console.log('listening to port', port)
})