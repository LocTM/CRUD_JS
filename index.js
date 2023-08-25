function save() {
    let fullName = document.getElementById("fullname").value;
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
    
    if(_.isEmpty(fullName)) {
      console.log("Vui lòng nhập họ tên")
    }
}