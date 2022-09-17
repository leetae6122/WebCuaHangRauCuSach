//document.querySelector("h1.dangnhap").style.backgroundColor = "#7557df";

var taikhoan = '{"Username":[ {"username":"dddd","matkhau":"ttt12344"},{"username":"Nguyễn Thanh Thanh","matkhau":"ttt12345"},{"username":"Nguyễn Chi Thanh","matkhau":"ttt12346"}]}';


var obj = JSON.parse(taikhoan);

 //   document.getElementById("p").innerHTML= obj.Username[1].matkhau;

function checkValidForm(){
    var username = document.querySelector("#username");
    if(username.value.length == 0){
        alert("hãy nhập tên người dùng");
        return false;
    }  

    var passwork = document.querySelector("#password");
    if(passwork.value.length == 0){
        alert('Mật khẩu không hợp lệ');
        return false;
    }

    var laytt = obj.Username; 
    var usr = username.value;
    var pass = passwork.value;
  
    for(var i=0;i<laytt.length;i++){
        if(laytt[i].username == usr && laytt[i].matkhau == pass) {
         alert("Đăng nhập thành công"); 
        return true;
        }
        
    }
    alert("tài khoản hoặc mật khẩu không đúng!!");
    return false;

    
}