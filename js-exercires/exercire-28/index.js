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

const filterSpecialStudents = (name) => {
  const { lastName } = name;
  return lastName.indexOf('Do') !== -1;
};

const specialStudents = students.filter(filterSpecialStudents);

console.log("specialStudents:", specialStudents);
