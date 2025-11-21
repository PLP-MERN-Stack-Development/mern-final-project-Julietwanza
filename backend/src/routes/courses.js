const express = require('express');
const auth = require('../middleware/auth');
const Course = require('../models/Course');
const router = express.Router();

router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});

router.post('/', auth, async (req, res) => {
  // In production you would check req.user role === 'instructor'
  const course = await Course.create(req.body);
  res.json(course);
});

module.exports = router;
