const StudentController = require('./../../lib/controllers/StudentController');

describe('Unit tests for StudentController class', () => {
  const student1 = {
    id: '6264d5d89f1df827eb84bb23',
    name: 'Warren',
    email: 'Todd@visualpartnership.xyz',
    credits: 508,
    enrollments: ['Visual Thinking Intermedio', 'Visual Thinking Avanzado'],
    previousCourses: 1,
    haveCertification: true,
  };

  test('Get a list of all students', () => {
    const students = StudentController.getAllStudents();

    expect(students[0]).toStrictEqual(student1);
  });

  test('Get a list of students that have certification', () => {
    const certifiedStudents = StudentController.getAllCertificated();

    expect(certifiedStudents[0]).toStrictEqual(student1);
  });

  test('Get a list of students that have enough credits', () => {
    const studentsWithEnoughCredits =
      StudentController.getStudentsOver500Credits();

    expect(studentsWithEnoughCredits[0]).toStrictEqual(student1);
  });
});
