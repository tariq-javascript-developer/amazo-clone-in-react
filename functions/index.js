const functions = require("firebase-functions");
const express = require('express');
const cors = require("cors");
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51HQ6bQCUoyQ177cPnRHqKZszb2bJkfkV9xf0kMCzHbutAcnAyaDlD3WmeNEZNyfhXRk3m8Rnc2ASZYC3rcJNoIvn00LmA4RDxj');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello-world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    payment_method_types: ['card'],
  });
  
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/fir-b5c03/us-central1/api
