var student = require('./student')
var teacher = require('./teacher')

function add(teacherName,students){
  teacher.add(teacherName)

  students.forEach(function(item,index){
    student.add(item)
  })
}
// teacher.add('Scott')

exports.add = add
// module.exports = add