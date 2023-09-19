const AWS = require('aws-sdk');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

AWS.config.update({
  accessKeyId: 'AKIAVYK6UIJICTXC7QOT',
  secretAccessKey: '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',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

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
    // Upload the file to S3 bucket
    const params = {
      Bucket: 'eighty8alpha',
      Key: `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
      Body: file.buffer,
    };

    const uploadedObject = await s3.upload(params).promise();

    res.json({
      message: 'Image uploaded successfully',
      url: uploadedObject.Location 
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
