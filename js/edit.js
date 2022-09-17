function frmValidate(){
    var frm = document.forms['regfr'];
    var soluong = frm.sl;
    //số lượng là số dương
    var t2 = parseInt(soluong.value);
    if(isNaN(t2) || t2 < 0){
        alert("Hãy nhập số lượng là số dương!");
        soluong.focus();
        return false;
    }


    alert("Sửa thành công!");
    return true;
}
function getFile(filePath) {
    
    /*Chỉ lấy tên
    return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
    */
    //lấy tên và phần mở rộng
    return filePath.substr(filePath.lastIndexOf('\\') + 1);
}
function addimg(){
    var ha = document.getElementById('ha');
    var src= getFile(ha.value)
    var img = document.getElementById('img');
    //td.innerHTML = "<img width='50' src = '"+ src +"' >";
    img.innerHTML = "<img width='100px' src = '../image/sanpham/"+ src +"' > ";
    
}