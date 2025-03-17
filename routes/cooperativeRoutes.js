const express = require('express');
const router = express.Router();
const cooperativesController = require('../controllers/cooperativeController');

router.post('/', cooperativesController.createCooperative);
router.get('/', cooperativesController.getAllCooperatives);
router.get('/:id', cooperativesController.getCooperativeById);
router.put('/:id', cooperativesController.updateCooperative);
router.delete('/:id', cooperativesController.deleteCooperative);

module.exports = router;
