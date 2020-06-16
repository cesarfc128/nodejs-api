'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product')

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/prod/:id', controller.getById);
router.get('/tag/:tag', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;