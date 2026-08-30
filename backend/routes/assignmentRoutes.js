const express = require('express');
const { assignLicence, getMyLicences } = require('../controllers/assignmentController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, adminOnly, assignLicence);
router.get('/my', protect, getMyLicences);

module.exports = router;
