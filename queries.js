const Pool = require('pg').Pool

// Typically, you would hide configuration details in normal cirumstances.
// For the sake of the challenge, I'm leaving the details here.
const pool = new Pool ({
    user: 'henrywang',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

// Product GET endpoint to retrieve properties of a product
const getProductById = (request, response) => {
    const id = parseInt(request.params.id)

    // $1 is a numbered placeholder in PostgreSQL
    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            errorMessage = new Error("error:string")
            response.status(400).send(errorMessage)
        }

        response.status(200).json(results.rows)
    })
}

// Product PUT endpoint to update properties of a product
const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const properties = request.body

    pool.query('UPDATE products SET id = $1, properties = $2', [id, properties],
                (error, results) => {
        if (error) {
            errorMessage = new Error("error:string")
            response.status(400).send(errorMessage)
        }
        response.status(200).send('Product ${id} successfully updated with new properties')
    })
}

// Product DELETE endpoint to remove product from database
const removeProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM products where id = $1', [id], (error, results) => {
        if (error) {
            errorMessage = new Error("error:string")
            response.status(400).send(errorMessage)
        }

        response.status(200).send('Product ${id} successfully deleted')
    })
}

// Payment POST endpoint to create a new payment
const createPayment = (request, response) => {
    const info = request.body
    var json = JSON.parse(info)

    pool.query('INSERT INTO payments (info) VALUES ($1)', [info], (error, results) => {
        var currStatus = (error) ? 400 : 200

        response.json({ status : currStatus, paymentId : "1", verifyCode : json[idempotencyKey] + 1,
                        timeCreated : "1/1/2020" });
    })
}

// Broadcast GET endpoint to retrieve data from a
const getBroadcastById = (request, response) => {
    const id = parseInt(request.params.id)

    // $1 is a numbered placeholder in PostgreSQL
    pool.query('SELECT * FROM broadcasts WHERE id = $1', [id], (error, results) => {
        if (error) {
            errorMessage = new Error("error:string")
            response.status(400).send(errorMessage)
        }

        response.status(200).json(results.rows)
    })
}

// Product PUT endpoint to update properties of a product
const updateBroadcast = (request, response) => {
    const id = parseInt(request.params.id)
    const properties = request.body

    pool.query('UPDATE broadcasts SET id = $1, properties = $2', [id, properties],
                (error, results) => {
        if (error) {
            errorMessage = new Error("error:string")
            response.status(400).send(errorMessage)
        }
        response.status(200).send('Broadcast ${id} successfully updated with new properties')
    })
}

// Product DELETE endpoint to remove product from database
const removeBroadcast = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM broadcasts where id = $1', [id], (error, results) => {
        if (error) {
            errorMessage = new Error("error:string")
            response.status(400).send(errorMessage)
        }

        response.status(200).send('Product ${id} successfully deleted')
    })
}

module.exports = {
    getProductById,
    updateProduct,
    removeProduct,
    createPayment,
    getBroadcastById,
    updateBroadcast,
    removeBroadcast,
}
