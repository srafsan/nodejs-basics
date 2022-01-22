// Step-1: Creating the app
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

// Step-3: Calling the server
app.get('/', (req, res) => {
    const product = {
        name: 'rice',
        price: 220
    }
    res.send(product)
})

app.get('/product/potato', (req, res) => {
    const product = {
        vegetable: 'potato',
        quantity: 1000,
        price: 100000
    }
    res.send(product)
})

// For creating dynamic URL
const users = ['Rafsan', 'Farsad', 'Tareq', 'Raiyan', 'Shahnaz']

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id]

    res.send({ id, name })
})

// For Posting
app.post('/addUser', (req, res) => {
    // save to database
    const user = req.body
    user.id = 55
    res.send(user)
})

// Step-2: Running the server
app.listen(3000, () => console.log('Listening to port 3000'))