const express = require('express');
const auth = require('../middleware/auth');
const Progress = require('../models/Progress');
const router = express.Router();

router.get('/:courseId', auth, async (req, res) => {
  const p = await Progress.findOne({ user: req.user.id, course: req.params.courseId });
  res.json(p || { completedLessonIds: [] });
});

router.post('/:courseId/complete', auth, async (req, res) => {
  const { lessonId } = req.body;
  let p = await Progress.findOne({ user: req.user.id, course: req.params.courseId });
  if (!p) p = await Progress.create({ user: req.user.id, course: req.params.courseId, completedLessonIds: [] });
  if (!p.completedLessonIds.find(x => x.toString() === lessonId)) p.completedLessonIds.push(lessonId);
  await p.save();
  res.json(p);
});

module.exports = router;
