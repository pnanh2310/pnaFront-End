function signup(e){
    event.preventDefault();
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var passwordMK=document.getElementById('passwordMK').value;
    var user={
        username: username,
        email: email,
        password: password,
    };
    if(password.length<8){
        alert("Mật khẩu phải từ 8 ký tự trở lên. Nhập lại");
        document.getElementById('password').focus();
    }
    else if(password!=passwordMK){
        alert("password khác confirm password vui lòng đặt lại!");
    }
    else{
        var json=JSON.stringify(user);
        localStorage.setItem(username,json);
        alert("Đăng ký thành công !");
        window.location.href="index.html";
    }
}
function login(e){
    event.preventDefault();
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var user=localStorage.getItem(username);
    var data=JSON.parse(user);
    if(password.length<8){
        alert("Mật khẩu phải từ 8 ký tự trở lên. Nhập lại");
    }
    else if(user==null){
        alert('Username chưa được đăng ký');
    }
    else if(username==data.username && password==data.password){
        alert('Đăng nhập Thành Công!');
        window.location.href="TrangChu.html";
    }
    else{
        alert('Sai user or pass');
    }
}
function MuaSanPham(e){
    var HoVaTen=document.getElementById('HoVaTen').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var DiaChi=document.getElementById('DiaChi').value;
    if(number.length<10){
        alert('Số điện thoại k đủ 10 số, vui lòng nhập lại')
    }
    else{
        alert('Đăng ký mua sản phẩm thành công!');
        alert('Trở lại Trang Chủ!');
        window.location.href="TrangChu.html";
    }

}
document.getElementById('quenmk').addEventListener('click', function() {
    const email = prompt('Vui lòng nhập Email của bạn: ');
    if (email) {
        alert('Yêu cầu khôi phục mật khẩu đã được gửi đến ' + email);
    }
});