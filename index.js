

const express = require('express')

//also used - import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('rohnoan')
})
app.get('/login',(req,res)=>{
    res.send('<h1>rohan is cool</h1>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>rohan sharma youtube </h2>")
}) 