const streamifier = require('streamifier')
const cloudinary = require('cloudinary').v2
require('dotenv').config()
cloudinary.config({
    cloud_name:'dwxxqd2zu',
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
exports.UploadImage=(req)=>{
    return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
      streamifier.createReadStream(req.data).pipe(stream);
    });
}