//document.querySelector("h1.example").style.backgroundColor = "#7557df";
function checkValidForm(){


    var hoten = document.querySelector("#hoten");
    if(hoten.value.length == 0){
        alert("họ tên không rỗng");
        return false;
    }  

    var quequan = document.querySelector("#quequan");
    if(quequan.value.length == 0){
        alert("Địa chỉ không được rỗng");
        return false;
    }   

    var sdt = document.querySelector("#sdt");
    if(sdt.value.length != 10){
        alert(" SĐT:Nhập chuỗi số 10 ký tự");
        return false;
    }  

    
    var radionam = document.querySelector("#radionam");
    var radionu = document.querySelector("#radionu");
    if(radionam.checked == false && radionu.checked == false) {
        alert("giới tính không được rỗng");
        return false;
    }


   
    var ngaysinh = document.querySelector("#ngaysinh");
    if(ngaysinh.value == '' ||
    (new Date(ngaysinh.value)).getTime() >=  (new Date()).getTime()){
        alert("Ngày sinh phải nhỏ hơn ngày hiện hành");
        return false;
    }  

  
    var anhdaidien = document.querySelector("#anhdaidien");
    if(anhdaidien.value == ''){
        alert("Ảnh đại diện ko rỗng");
        return false;
    }  
    
    var email = document.querySelector("#email");
    var chuanemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!chuanemail.test(email.value)) { 
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        return false; 
    }

    var matkhau = document.querySelector("#matkhau");
    if(matkhau.value.length == 0){
        alert("Mật khẩu ko rỗng");
        return false;
    }  

    var chuanmatkhau = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
    if(matkhau.value.length < 8 || matkhau.value.length > 20){
        alert('Mật khẩu không hợp lệ');
        return false;
    }


    var nhaplaimatkhau = document.querySelector("#nhaplaimatkhau");
    if(matkhau.value.length != nhaplaimatkhau.value.length 
        || matkhau.value != nhaplaimatkhau.value){  
        alert("mat khau ko dung");
        return false;  
        }  
        
  
    alert("đăng ký thành công");
    return true;
}