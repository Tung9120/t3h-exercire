const students = [
  {
    id: "T3HXX1",
    firstName: "NgAN",
    lastName: "Duong Thuy",
  },
  {
    id: "T3HXX2",
    firstName: "Ha",
    lastName: "Do Thi Thu",
  },
  {
    id: "T3HXX5",
    firstName: "Minh",
    lastName: "Nguyen Nhat",
  },
];

const formatStudentName = (student) => {
  let { id, firstName, lastName } = student;
  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();
  let formatFn = firstName.split("");
  let formatLn = lastName.split("");
  formatFn[0] = formatFn[0].toUpperCase();
  formatLn[0] = formatLn[0].toUpperCase();

  for (let i = 0; i < formatLn.length; i++) {
    if (formatLn[i] == " " && formatLn[i + 1] != " ") {
      formatLn[i + 1] = formatLn[i + 1].toUpperCase();
    }
  }

  firstName = formatFn.join("");
  lastName = formatLn.join("");

  const newStudent = {};
  newStudent.id = id;
  newStudent.firstName = firstName;
  newStudent.lastName = lastName;

  return newStudent;
};

const studentsNameFormated = students.map(formatStudentName);

const findStudents = (name) => {
  name = name.toLowerCase();
  const matchedStudents = studentsNameFormated.filter((student) => {
    return student.firstName.toLowerCase().indexOf(name) !== -1;
  });
  return matchedStudents;
};

console.log('studentNameFomated:', studentsNameFormated);
console.log('findStudents("a"):', findStudents("a"));
