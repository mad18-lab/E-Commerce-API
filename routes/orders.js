const express = require("express")
const orders = require("../models/orders")
const Cart = require("../models/cart")
const User = require("../models/users")
const Auth = require("../middleware auth/auth")


const route = new express.Router()

route.get('/orders', Auth, async (req, res) => {
    const owner = req.user._id;
    try {
        const order = await orders.find({ owner: owner }).sort({ date: -1 });
        if(order) {
            return res.status(200).send(order)
        }
        res.status(404).send('No orders found')
    } catch (error) {
        res.status(500).send()
    }
})