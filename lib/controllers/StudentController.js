const StudentService = require('./../services/StudentService');

class StudentController {
  static getAllStudents = () => StudentService.getAllStudents();

  static getAllCertificated = () => StudentService.getAllCertificate();

  static getStudentsOver500Credits = () =>
    StudentService.getStudentsOverEnoughCredits(500);
}

module.exports = StudentController;
