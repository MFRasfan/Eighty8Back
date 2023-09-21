require('dotenv').config();
const express = require("express")
const cors = require("cors")
const path = require('path')
const useRouter = require("./routes")
const { connectDB } = require("./database");

const PORT= process.env.PORT

const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(cors())
app.use(express.json({urlencoded:true}))

app.use(express.static(path.join(__dirname + "/public")))

app.use('/uploads', express.static('uploads'));



connectDB()
useRouter(app)


app.listen(PORT,()=>console.log(`Server is running on ${PORT} `))