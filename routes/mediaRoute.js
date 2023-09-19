
const express = require("express");
const route = express.Router();

const {
   upload,
   uploadImage,
   deleteImage
} = require('../controller/mediaController')


route.post('/uploads', upload.single('file'), uploadImage)
route.delete('/delete/', deleteImage )


module.exports= route