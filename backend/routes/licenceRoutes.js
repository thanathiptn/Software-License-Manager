const express = require('express');
const { getLicences, createLicence } = require('../controllers/licenceController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, adminOnly, getLicences);
router.post('/', protect, adminOnly, createLicence);

module.exports = router;
