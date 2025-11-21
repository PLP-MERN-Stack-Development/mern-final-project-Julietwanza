const mongoose = require('mongoose');
const ProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  completedLessonIds: [{ type: mongoose.Schema.Types.ObjectId }]
}, { timestamps: true });
module.exports = mongoose.model('Progress', ProgressSchema);
