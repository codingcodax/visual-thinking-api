const Reader = require('./../utils/Reader');

class StudentService {
  static getAllStudents = () => Reader.readJsonFile('visualpartners.json');

  static getAllCertificate() {
    const students = this.getAllStudents();
    const certifiedStudents = students.filter(
      (student) => student.haveCertification === true
    );

    return certifiedStudents;
  }

  static getStudentsOverEnoughCredits(credits) {
    const students = this.getAllStudents();
    const studentsWithEnoughCredits = students.filter(
      (student) => student.credits > credits
    );

    return studentsWithEnoughCredits;
  }
}

module.exports = StudentService;
