const Router = require('express');
const Exam = require('../models/exams');
const router = Router()

router.get('/exams', (req, res) => {
  Exam.find((err, exams) => {
    res.json(exams)
  })
})

router.post('/exam', function (req, res) {
  const newExam = new Exam({
    book: req.body.book
  })
  newExam.save((err, Exam) => {
    return res.status(200).json({ msg: "ok" })
  })
})

module.exports = router

