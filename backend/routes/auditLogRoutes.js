const express = require('express');
const { getAuditLogs } = require('../controllers/auditLogController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, adminOnly, getAuditLogs);

module.exports = router;
