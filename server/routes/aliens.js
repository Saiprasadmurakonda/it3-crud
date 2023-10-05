const express = require('express')
const router = express()
const Alien = require('../models/alien')
router.get('/', async(req,res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch(err){
        res.send('Error' + err)
    }
})
router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        alien.name = req.body.name
        alien.tech = req.body.tech
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})
module.exports = router