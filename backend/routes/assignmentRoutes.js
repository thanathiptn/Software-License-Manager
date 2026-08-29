const express = require('express');
const { assignLicence } = require('../controllers/assignmentController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, adminOnly, assignLicence);

module.exports = router;
