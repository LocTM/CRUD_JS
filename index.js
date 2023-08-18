class Student {
    constructor(
        id,
        name,
        firstName,
        lastName,
        dob,
        address,
        phone,
        email,
        gender,
    ) {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.gender = gender; 
    }
}

function renderStudents(students) {
    document
    .getElementById("tbStudents")
    .querySelector("tbody")
    .replaceChildren();
}

function intializeSearchPage() {
var students = [
    new Student(
    1,
    "Nguyen Van",
    "A",
    "01/01/1990",
    "123 Nguyen Van Linh",
    "0123456789",
    "NguyenVanA@gmail.com",
    "Male"
    ),
    new Student(
    2,
    "Nguyen Thi",
    "B",
    "01/01/1990",
    "123 Nguyen Van Linh",
    "0123456789",
    "Female",
    )
   ];
   renderStudents(students);
}

function main() {
 addEventListenerMainPage();
 intializeSearchPage();
}
main();