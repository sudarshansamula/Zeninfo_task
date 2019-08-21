var express = require('express');
var userEnvironments = require('./enviroments');

const router = express.Router();

/**
 * @param {*} req
 * @param {*} res
 */

router.get('/:process', userEnvironments.getEnvironments);
router.post('/:process/:key/:value', userEnvironments.setEnvironments);


module.exports =  router;