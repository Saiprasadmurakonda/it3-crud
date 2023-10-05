const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const aR = require('./routes/aliens')
const url = 'mongodb+srv://saiprasad:prasad@cluster0.z50izbg.mongodb.net/?retryWrites=true&w=majority'
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open', () => {
    console.log('Connected...')
})
app.use(cors())
app.use(express.json())
app.use('/aliens',aR)
app.listen(9000, () => {
    console.log('Server started')
})
