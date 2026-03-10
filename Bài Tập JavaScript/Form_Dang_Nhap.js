const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    const tdn = document.querySelector('[name="txtTDN"]').value.trim();
    const mk = document.querySelector('[name="txtMK"]').value.trim();
    const xnmk = document.querySelector('[name="txtXNMK"]').value.trim();

    if(!tdn || !mk || !xnmk){
        alert("Các trường không được bỏ trống!");
        e.preventDefault(); //Ngăn hành động mặc định của trình duyệt
        return;
    }

    if(tdn.length < 6){
        alert("Tên đăng nhập phải ≥ 6 ký tự!");
        e.preventDefault();
        return;
    }

    if(mk !== xnmk){
        alert("Xác nhận mật khẩu không chính xác!");
        e.preventDefault();
    }

});