const express = require('express');
const { body } = require('express-validator');
const { getApprovalRequests, createApprovalRequest, reviewApprovalRequest } = require('../controllers/approvalController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getApprovalRequests);

router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('isbn').notEmpty().withMessage('ISBN is required'),
  body('category').notEmpty().withMessage('Category is required')
], createApprovalRequest);

router.put('/:id/review', auth, [
  body('status').isIn(['approved', 'rejected']).withMessage('Status must be approved or rejected'),
  body('reviewNotes').optional().isString()
], reviewApprovalRequest);

module.exports = router;