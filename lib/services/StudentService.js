const Reader = require('./../utils/Reader');

class StudentService {
  static getAllStudents = () => Reader.readJsonFile('visualpartners.json');
}

module.exports = StudentService;
