const router = require("express").Router();
const stateController = require('../controllers/states.controller');

router.get('/getstates', stateController);

module.exports = router;