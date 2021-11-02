const router = require("express").Router();
const fileController = require('../controllers/file.controller');

router.get('/', fileController);

module.exports = router;