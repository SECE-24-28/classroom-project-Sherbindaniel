const express = require('express');
const { body } = require('express-validator');
const { issueBook, returnBook, getIssueRecords } = require('../controllers/issueController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getIssueRecords);

router.post('/issue', auth, [
  body('bookId').notEmpty().withMessage('Book ID is required'),
  body('studentName').notEmpty().withMessage('Student name is required'),
  body('studentId').notEmpty().withMessage('Student ID is required'),
  body('dueDate').isISO8601().withMessage('Valid due date is required')
], issueBook);

router.put('/return/:id', auth, returnBook);

module.exports = router;