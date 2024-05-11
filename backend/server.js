const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const bestsellerRouter = require('./routes/bestseller');
const app = express()
const port = 3000


dotenv.config()

mongoose.connect(process.env.MONGODB)
.then(() => console.log("database connected"))
.catch((error) => console.log(error))

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}))

app.use(errorHandler);
app.use('/api/', authRouter);
app.use('/api/products', productRouter);
app.use('/api/bestsellers', bestsellerRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`server running on port ${process.env.PORT}!`))