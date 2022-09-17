function checkvalid() {

    var frm = document.forms['regfrm'];
    var hoten = frm.hoten;
    if (hoten.value.length == 0) {
        alert('Họ tên không được rỗng');
        hoten.focus();
        return false;
    }
    var sdt = frm.sdt;
    var regsdt = /\d{10}/;
    if (regsdt.test(sdt.value) === false) {
        alert("SDT gồm 10 chữ số");
        sdt.focus();
        return false;
    }
    var dchi = frm.dchi;
    if (dchi.value.length <= 10) {
        alert('Bạn hãy điền địa chỉ');
        dchi.focus();
        return false;
    }

    alert("Xác Nhận Đơn Hang thành công!");
    return true;
}



function checkkeysearch() {
    var key = event.which || event.keycode;
    if (key == 32) {
        dosearch();
    }
}

function dosearch() {
    var frm = document.froms['frmsearch'];
    if (frm.words.value.length > 0) {
        frm.submit();
    }
}



function showsearch() {
    var url = new URL(window.location);
    var ws = url.searchParams.get('words');
    document.getElementById('showinfo').innerHTML = '<h2>Từ khóa tìm kiếm:<b>' + ws + '</b></h2>';
}



var intemList = {
    "sp001": {
        "name": "Bắp Cải Trắng",
        "price": 10000,
        "photo": "image/sanpham/Rau/bap-cai.webp",
    },
    "sp002": {
        "name": "Bắp Cải Tím",
        "price": 17000,
        "photo": "image/sanpham/Rau/cai-tim.png"
    },

    "sp003": {
        "name": "Cải Thìa",
        "price": 15000,
        "photo": "image/sanpham/Rau/cai-thia.png"
    },

    "sp004": {
        "name": "Rau Cải Xanh",
        "price": 20000,
        "photo": "image/sanpham/Rau/Cai-xanh.webp"
    },

    "sp005": {
        "name": "Rau Ngót",
        "price": 10000,
        "photo": "image/sanpham/Rau/rau-ngot.png"
    },

    "sp006": {
        "name": "Rau Cần Tàu",
        "price": 28000,
        "photo": "image/sanpham/Rau/can-tau.png"
    },

    "sp007": {
        "name": "Củ Dền",
        "price": 25000,
        "photo": "image/sanpham/Rau/cu-den.webp"
    },

    "sp008": {
        "name": "Củ Khoai Tây",
        "price": 25000,
        "photo": "image/sanpham/Rau/cu-khoai-tay.png"
    },

    "sp009": {
        "name": "Khoai Lang Tím",
        "price": 17000,
        "photo": "image/sanpham/Rau/khoai-lang-tim.png"
    },
    "sp0010": {
        "name": "Củ Carrot",
        "price": 20000,
        "photo": "image/sanpham/rau/cucarot_prev_ui.png",
    },
    "sp0011": {
        "name": "Củ Khoai Lang Vàng",
        "price": 20000,
        "photo": "image/sanpham/Rau/khoai-lang-vang.png"
    },

    "sp0012": {
        "name": "Khoai Mỡ Tím",
        "price": 20000,
        "photo": "image/sanpham/Rau/khoaimo_prev_ui.png"
    },

    "sp013": {
        "name": "Dưa Hấu",
        "price": 8000,
        "photo": "image/sanpham/Qua/dua.png"
    },

    "sp014": {
        "name": "Vải Thiều",
        "price": 30000,
        "photo": "image/sanpham/Qua/qua-vai.png"
    },
    "sp015": {
        "name": "Xoài Cát Chu",
        "price": 20000,
        "photo": "image/sanpham/Qua/xoai-cat-chu.png"
    },

    "sp016": {
        "name": "Roi Đỏ An Phước",
        "price": 25000,
        "photo": "image/sanpham/Qua/roi-do-An-Phuoc.webp"
    },

    "sp017": {
        "name": "Đu Đủ",
        "price": 8000,
        "photo": "image/sanpham/Qua/du-du-Acon.webp"
    },

    "sp018": {
        "name": "Cam Sành",
        "price": 10000,
        "photo": "image/sanpham/Qua/cam.webp"
    },
    "sp019": {
        "name": "Nấm Rơm",
        "price": 60000,
        "photo": "image/sanpham/Qua/nam-rom.png",
    },
    "sp020": {
        "name": "Nấm Hương",
        "price": 300000,
        "photo": "image/sanpham/Qua/nam-huong.webp"
    },

    "sp021": {
        "name": "Nấm Mèo",
        "price": 80000,
        "photo": "image/sanpham/Qua/nam-meo.webp"
    },

    "sp022": {
        "name": "Nấm Đùi Gà",
        "price": 220000,
        "photo": "image/sanpham/Qua/nam-dui-ga.webp"
    },

    "sp023": {
        "name": "Nấm Tuyết",
        "price": 100000,
        "photo": "image/sanpham/Qua/nam-tuyet.webp"
    },

    "sp024": {
        "name": "Nấm Mỡ Nâu",
        "price": 160000,
        "photo": "image/sanpham/Qua/xoai-cat-chu.png"
    },
    /*----------------------------*/
    "sp025": {
        "name": "Bắp",
        "price": 9000,
        "photo": "image/sanpham/tinhbot/bap.png"
    },

    "sp026": {
        "name": "Gạo Lứt",
        "price": 50000,
        "photo": "image/sanpham/tinhbot/gaolut_prev_ui.png"
    },

    "sp027": {
        "name": "Gạo",
        "price": 18000,
        "photo": "image/sanpham/tinhbot/gao1_prev_ui.png"
    },
    "sp028": {
        "name": "Yến Mạch",
        "price": 28000,
        "photo": "image/sanpham/tinhbot/mach_prev_ui.png"
    },

    "sp029": {
        "name": "Lúa Mì",
        "price": 25000,
        "photo": "image/sanpham/tinhbot/luami12_prev_ui.png"
    },

    "sp030": {
        "name": "Củ Sắn",
        "price": 9000,
        "photo": "image/sanpham/tinhbot/cusan_prev_ui.png"
    },
    "sp031": {
        "name": "Hạt Điều",
        "price": 50000,
        "photo": "image/sanpham/Hat/hatdieu.png"
    },

    "sp032": {
        "name": "Hạt Dẻ Cười",
        "price": 85000,
        "photo": "image/sanpham/Hat/hatdecuoi.png"
    },
    "sp033": {
        "name": "Hạt Hạnh Nhân",
        "price": 33000,
        "photo": "image/sanpham/Hat/hathanhnhan.png"
    },
    "sp034": {
        "name": "Quả Óc Chó",
        "price": 250000,
        "photo": "image/sanpham/Hat/quaocho.png"
    },

    "sp035": {
        "name": "Đậu Phộng",
        "price": 25000,
        "photo": "image/sanpham/Hat/dauphong.png"
    },

    "sp036": {
        "name": "Cà Phê",
        "price": 230000,
        "photo": "image/sanpham/Hat/caphe.png"
    }
};



function dathang() {
    var frm = document.forms['frm'];
    var input = frm.input;
    var hang = frm.button;
    if (input.value <= 0, input.value > 100) {
        alert(' số lượng sản phẩm từ 1 đến 100');
        input.focus();
        return false;
    }
}

function addCart(code) {
    // var frm = document.forms['frm'];
    var input = document.getElementById(code);
    var thongtin = code + " : " + input.value; //mã sản phẩm + số lượng 
    if (typeof localStorage[code] === 'undefined') {
        //Thêm sản phẩm
        window.localStorage.setItem(code, input.value);
    } else if (typeof localStorage[code]) {
        number = parseInt(document.getElementById(code).value); //số lượng sản phẩm mới
        current = parseInt(window.localStorage.getItem(code)); //sản phẩm cũ
        window.localStorage.setItem(code, current + number);
        if (parseInt(localStorage.getItem(code)) > 100) {
            alert('số lượng sản phẩm đã vượt quá 100 sản phẩm');
            window.localStorage.setItem(code, 100);
        }
    }
    alert('Them san pham');

}

function showCart() {
    var TotalPreTax = 0;
    var dhang = document.getElementById('dhang');
    var tbody = document.getElementById('list_sp');

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    // var thead = document.getElementsById('headsp');
    var hinhanhbox = document.createElement('td');
    hinhanhbox.innerHTML = 'Hình ảnh';
    var tensp = document.createElement('td');
    tensp.innerHTML = 'Tên sản phẩm';
    var soluong = document.createElement('td');
    soluong.innerHTML = 'Số lượng';
    var dongia = document.createElement('td');
    dongia.innerHTML = 'Đơn giá';
    var thanhtien = document.createElement('td');
    thanhtien.innerHTML = 'Thành tiền';
    var xoa = document.createElement('td');
    var tr1 = document.createElement('tr');

    tr1.append(hinhanhbox);
    tr1.append(tensp);
    tr1.append(soluong);
    tr1.append(dongia);
    tr1.append(thanhtien);
    tr1.append(xoa);
    tbody.append(tr1);


    Object.keys(localStorage).forEach(function(key) {
        var list = intemList[key];
        var photo = list.photo;
        var name = list.name;
        var price = list.price;
        var order = localStorage[key];
        var total = order * price;
        console.log(key);

        var boxphoto = document.createElement('img');
        boxphoto.src = photo;
        var photobox = document.createElement('td');
        photobox.append(boxphoto);

        var namebox = document.createElement('td');
        namebox.append(name);

        var orderbox = document.createElement('td');
        orderbox.append(order);

        var pricebox = document.createElement('td');
        pricebox.append(formatter.format(price));

        var totalbox = document.createElement('td');
        totalbox.append((formatter.format(total)));
        var boxdelete = `<i class="fa fa-trash" onclick='removeCart("${key}")'></i>`;
        var deletebox = document.createElement('td');
        deletebox.innerHTML = boxdelete;

        var tr = document.createElement('tr');

        tr.append(photobox);
        tr.append(namebox);
        tr.append(orderbox);
        tr.append(pricebox);
        tr.append(totalbox);
        tr.append(deletebox);
        tbody.append(tr);

        TotalPreTax += price * order;
    });

    console.log(TotalPreTax);


    var thanhtien = document.getElementById('thanhtien');
    thanhtien.innerText = formatter.format(TotalPreTax);

    var chietkhau = document.getElementById('chietkhau');
    chietkhau.innerText = formatter.format(TotalPreTax * discount());

    var thue = document.getElementById('thue');
    thue.innerText = formatter.format(0.1 * (TotalPreTax - TotalPreTax * discount()));

    var tonghang = document.getElementById('tongdon');
    tonghang.innerText = formatter.format(TotalPreTax - (TotalPreTax * discount()) + 0.1 * (TotalPreTax - TotalPreTax * discount()));

}


function removeCart(code) {

    if (typeof window.localStorage[code] !== "undefined") {
        var sp = intemList[code];
        var tensp = sp.name;
        alert('Xóa sản phẩm ' + tensp);
        window.localStorage.removeItem(code);
        document.getElementById('dhang').
        getElementsByTagName('tbody')[0].innerHTML = "";
        showCart();
    }

}

function discount() {
    var d = new Date(); //lấy ngày hiện tại của máy tính
    var weekday = d.getDay(); //lấy ngày trong tuần
    var totalMins = d.getHours() * 60 + d.getMinutes(); //đổi
    if (weekday >= 6 && weekday <= 7 && (totalMins >= 300 && totalMins <= 420))
        return 0.05;
    return 0;
}
window.onstorage = () => {
    showCart();
}