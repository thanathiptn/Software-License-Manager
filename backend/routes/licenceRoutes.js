const express = require('express');
const { getLicences } = require('../controllers/licenceController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, adminOnly, getLicences);

module.exports = router;