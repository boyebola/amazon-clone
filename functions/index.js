const functions = require('firebase-functions');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')(`${process.env.STRIPE_KEY}`);

//API

//App Config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//APi routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'cad',
  });

  response.status(201).send({
    paymentIntentInfo: paymentIntent,
  });
});

app.post('/payments/update', async (request, response) => {
  const total = request.query.total;
  const paymentIntentId = request.query.id;

  const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
    amount: total,
  });

  response.status(201).send({
    paymentIntentInfo: paymentIntent,
  });
});

//listen commands
exports.api = functions.https.onRequest(app);
