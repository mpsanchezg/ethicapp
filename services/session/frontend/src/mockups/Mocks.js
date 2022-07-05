const teacherUser = {
  email: 'teacher@ethicapp.com',
  role: 'teacher'
};

const studentUser = {
  id: 1,
  name: 'student',
  email: 'student@ethicapp.com',
  role: 'student'
};

const students = [
  {
    id: 1,
    email: 'estudiante1@ethicapp.cl',
    role: 'student',
  },
  {
    id: 2,
    name: 'Estudiante 2',
    email: 'estudiante2@ethicapp.cl',
    role: 'student',
  },
];

const sessions = [
  {
    id: 1,
    version: 1,
    code: 'abcde',
    state: 'waiting',
    name: 'Ética Ev. 1',
    wfName: 'test_workflow',
    instructionalDesign: [''],
    students: students,
  },
];

export { sessions, teacherUser, studentUser, students };
