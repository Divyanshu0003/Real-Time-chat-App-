const express = require('express');
const { getMessages, sendMessage } = require('../controllers/chatController');
const upload = require('../middleware/multer');
const router = express.Router();

router.get('/:group', getMessages);
router.post('/', upload.single('file'), sendMessage);

module.exports = router;
