const StudentService = require('./../../lib/services/StudentService');

describe('Unit test for StudentService class', () => {
  test('Get a list of all students', () => {
    const student1 = {
      id: '6264d5d89f1df827eb84bb23',
      name: 'Warren',
      email: 'Todd@visualpartnership.xyz',
      credits: 508,
      enrollments: ['Visual Thinking Intermedio', 'Visual Thinking Avanzado'],
      previousCourses: 1,
      haveCertification: true,
    };
    const students = StudentService.getAllStudents();

    expect(students[0]).toStrictEqual(student1);
  });
});
