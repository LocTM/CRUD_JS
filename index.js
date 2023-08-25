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
    } else if(phone.trim().length < 10) {
        phone = '';
        document.getElementById("phone-error").innerHTML = "Không được nhỏ hơn 10 ký tự";
    } else if(phone.trim().length > 10) {
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
        //lưu thông tin
        
    }
} 