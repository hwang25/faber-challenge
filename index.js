const express = require('express')
const bodyParser = require('body-parser')
const postgresDB = require('./queries')
const app = express()

async​ function predict(input)​ {
    // print length for text input, size for image file console.log(typeof input[0], input.size || input.length); return {
    “predictions”: [“grilled”, “chicken”, “tender”, “roasted”]; }
}

app.use(express.json())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(3000, () => {
    console.log('App is listening on port 3000')
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/product/:id', postgresDB.getProductById)
app.put('/product/:id', postgresDB.updateProduct)
app.delete('/product/:id', postgresDB.removeProduct)
app.post('/payment', postgresDB.createPayment)
app.get('/broadcast/:id', postgresDB.getBroadcastById)
app.put('/broadcast/:id', postgresDB.updateBroadcast)
app.delete('/product/:id', postgresDB.deleteBroadcast)
