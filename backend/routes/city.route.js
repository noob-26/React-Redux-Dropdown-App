const router = require("express").Router();
const cityController = require('../controllers/city.controller');

router.get('/getcities/:state', cityController);

module.exports = router;