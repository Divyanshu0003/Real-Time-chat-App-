// middleware/multer.js

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 1718560123.png
  },
});

const upload = multer({ storage });
module.exports = upload;
