const Reader = require('./../../lib/utils/Reader');

describe('Unit test for Reader class', () => {
  test('Get file with readJsonFile()', () => {
    const explorer1 = {
      id: '6264d5d89f1df827eb84bb23',
      name: 'Warren',
      email: 'Todd@visualpartnership.xyz',
      credits: 508,
      enrollments: ['Visual Thinking Intermedio', 'Visual Thinking Avanzado'],
      previousCourses: 1,
      haveCertification: true,
    };
    const explorers = Reader.readJsonFile('visualpartners.json');

    expect(explorers[0]).toStrictEqual(explorer1);
  });
});
