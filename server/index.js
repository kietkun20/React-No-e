const express = require('express')
const app = express()
const db = require('./ultils/db')

const bodyParser = require('body-parser')

//model
const Product = require('./model/Product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//router
const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')

db.sync()

//Route
app.use('/api/v1/user',userRouter)
app.use('/api/v1/product',productRouter)

app.listen(4000, () => {
  console.log(`Chạy giao diện`)
})