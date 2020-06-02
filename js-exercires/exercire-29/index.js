const students = [
  {
    id: "T3HXX1",
    firstName: "Ngan",
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

const sortedByStudentsNames = students.sort((a, b) => {
  var nameA = a.firstName.toUpperCase(); // bỏ qua hoa thường
  var nameB = b.firstName.toUpperCase(); // bỏ qua hoa thường
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // name trùng nhau
  return 0;
});

console.log("sortedByStudentsNames:", sortedByStudentsNames);
