const functions = require('firebase-functions');
const express = require('express');
const cors = require ('cors');
const stripe = require ('stripe')('sk_test_51I3l0CIGRVrUHCi53cFO1m136zI3QybEmjyLtfsfYR04np7gIzt08WZJI3R6KyTjok1RgND6BiQ79I49VXQMf7AR00qip7u7up');

const app = express ();

app.use(cors({origin:true}))
app.use(express.json());

app.get('/',(request, response ) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total ;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.Create({
        amount: total ,
        currency:"usd"

    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })


})

exports.api = functions.https.onRequest(app)
//(http://localhost:5001/clone-9fffb/us-central1/api)