const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/Order.js');

router.get('/', (req, res, next) => {
    Order.find((err, orders) => {
        if (err) return next(err);
        res.json(orders);
    })
})

router.get('/:id', (req, res, next) => {
    Order.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.post('/', (req, res, next) => {
    Order.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.put('/:id', (req, res, next) => {
    Order.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

router.delete('/:id', (req, res, next) => {
    Order.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})

module.exports = router;