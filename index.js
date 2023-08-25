function emailIsValid (email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
}


function save() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone= document.getElementById("phone").value;
    let address = document.getElementById("address").value; 
    let gender = '';

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } 
    else if (document.getElementById('famale').checked) {
        gender = document.getElementById('famale').value;
    }
    

    // fullname
    if(_.isEmpty(fullname)) {
        fullname = '';
        document.getElementById("fullname-error").innerHTML = "Vui lòng nhập họ tên"; 
    } else if(fullname.trim().length < 5) {
        fullname = '';
        document.getElementById("fullname-error").innerHTML = "Không được nhỏ hơn 5 ký tự"; 
    } else if(fullname.trim().length >50) {
        fullname = '';
        document.getElementById("fullname-error").innerHTML = "Không được lớn hơn 50 ký tự"; 
    } else {
        document.getElementById("fullname-error").innerHTML = ''; 
    }
    

    // email
    if(_.isEmpty(email)) {
        email = '';
        document.getElementById("email-error").innerHTML = "Vui lòng nhập Email"; 
    } else if(!emailIsValid(email)) {
        email = '';
        document.getElementById("email-error").innerHTML = "Email không hợp lệ"; 
    } else {
        document.getElementById("email-error").innerHTML = ''; 
    }

    // phone
    if(_.isEmpty(phone)) {
        phone = '';
        document.getElementById("phone-error").innerHTML = "Vui lòng nhập số điện thoại"; 
    }  else if(phone.trim().length > 10) {
        phone = '';
        document.getElementById("phone-error").innerHTML = "Số điện thoại không hợp lệ";
    } else {    
        document.getElementById("phone-error").innerHTML = ''; 
    }

    // address
    if(_.isEmpty(address)) {
        address = '';
        document.getElementById("address-error").innerHTML = "Vui lòng nhập địa chỉ"; 
    } else {
        document.getElementById("address-error").innerHTML = ''; 
    }

    //gender
    if(_.isEmpty(gender)) {
        gender = '';
        document.getElementById("gender-error").innerHTML = "Vui lòng chọn giới tính"; 
    } else {
        document.getElementById("gender-error").innerHTML = ''; 
    }

    if (fullname && email && phone && address && gender) {
        //lưu thông tin vào danh sách sinh viên
        
        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        
        
        students.push({
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
        });

        localStorage.setItem('students', JSON.stringify(students));

        this.renderListStudent();
    }
    // xong phần lưu thông tin
} 
function renderListStudent() 
{
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    if (students.length === 0) { 
        document.getElementById('list-student').style.display = 'none';
        return false;
        
    } 

    document.getElementById('list-student').style.display = 'block';

    let tableContent =  
    `<tr>
        <td width="30px">#</td>
        <td>Họ và tên</td>
        <td>Email</td>
        <td>Số điện thoại</td>\
        <td>Địa chỉ</td>
        <td>Giới tính</td>
         <td width="100px"></td>
    </tr>`;

    students.forEach((student, index) => {
        let studentId = index;
        let genderLabel = parseInt(student.gender) === 1 ? 'Nam' : 'Nữ';
        index++;
        tableContent += 
        `<tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${genderLabel}</td>
            <td> <a href="#" onclick='editStudent(${studentId})'>Sửa</a> | <a href="#" onclick='deleteStudent(${studentId})' >Xóa</a> </td>
        </tr>`; 
    })
    document.getElementById("grid-studens").innerHTML = tableContent;
 
} 

function deleteStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id, 1);
    localStorage.setItem('students', JSON.stringify(students));
    renderListStudent();
}

function editStudent(id) {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    let student = students[id];
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('email').value = student.email;
    document.getElementById('phone').value = student.phone;
    document.getElementById('address').value = student.address;

}
