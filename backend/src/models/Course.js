const mongoose = require('mongoose');
const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  durationMinutes: Number
});
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [LessonSchema]
}, { timestamps: true });
module.exports = mongoose.model('Course', CourseSchema);
