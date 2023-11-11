const express = require('express')
const Product = require('../models/product')

const getAllProductsStatic = async (req, res)=> {
    const products = await Product.find({ name: 'vase table' })
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res)=> {
    res.send(req.query)
}
 
module.exports = {
    getAllProductsStatic,
    getAllProducts
}