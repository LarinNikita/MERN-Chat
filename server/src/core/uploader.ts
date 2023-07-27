const cloudinary = require('cloudinary').v2;
const multer = require('multer');
import { Request } from "express";
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'image',
    allowedFormats: ['jpg', 'png'],
    filename: function (req: Request, file: any, cb: any) {
        cb(null, file.originalname); // Имя файла будет таким же, как у оригинального файла
    }
});

const uploader = multer({ storage: storage });

export default uploader;