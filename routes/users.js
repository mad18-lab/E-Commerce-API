const express = require('express');
const users = require('../models/users');
const Auth = require('../middleware auth/auth');

const route = new express.Router()

route.post('/users', async (req, res) => {
    const users = new Users(req.body)
    try {
        await user.save()
        const token = await users.generateAuthToken()
        res.status(201).send({users, token})
    } catch (error) {
        res.status(400).send(error)
    }
})

route.post('/users/login', async (req, res) => {
    try {
      const user = await Users.findByCredentials(req.body.email, req.body.password)
      const token = await user.generateAuthToken()
      res.send({ user, token})
    } catch (error) {
      res.status(400).send(error)
     }
})

route.post('/users/logout', Auth, async (req, res) => {
    try {
       req.user.tokens =  req.user.tokens.filter((token) => {
            return token.token !== req.token 
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

route.post('/users/logoutAll', Auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()        
    }
})

module.exports = route