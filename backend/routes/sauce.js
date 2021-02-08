const express = require('express');
const sauceCtrl = require('../controllers/sauce');

const router = express.Router();

router.post('/', sauceCtrl.createSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
router.get('/', sauceCtrl.getAllSauce);


module.exports = router;
