const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require('multer');
const path = require('path');
require('dotenv').config();



const s3Client=  new S3Client({
  region:"us-east-1",
  credentials:{
    accessKeyId: process.env.S3_ACCESS_ID,
    secretAccessKey: process.env.S3_SECRET,
  }
})

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const uploadImage = async (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload an image');
    error.status = 400;
    return next(error);
  }

  try {
    let imageKey= `uploads/${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    const params = new PutObjectCommand({
      Bucket: 'eighty8alpha-dev',
      Key: imageKey,
      Body: file.buffer,
      ContentType:file.mimetype
    });

    await s3Client.send(params);
    
    res.json({
      message: 'Image uploaded successfully',
      url: imageKey
    });

  } catch (err) {
    next(err);
  }
};

const deleteImage = async (req, res) => {
  const filename = req.query.filename;
  // Delete the image from S3 bucket
  const params = {
    Bucket: 'eighty8alpha',
    Key: filename
  };

  try {
    await s3.deleteObject(params).promise();
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting file' });
  }
};

module.exports = { uploadImage, upload, deleteImage };
