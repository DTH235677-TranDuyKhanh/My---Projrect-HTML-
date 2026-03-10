const form = document.forms["f"];

//Kiểm tra mức lương 
function KiemTraLuong()
{
    var mucluong = form.txtMucLuong.value;
    if(mucluong !== "" && isNaN(mucluong)){
        alert("Mức lương phải là số! ");
        form.txtMucLuong.focus();
        return false;
    }
    return true;
}
function KiemTraForm()
{
    //Kiểm tra họ tên 
    if(form.txtHoTen.value == ""){
        alert("Tên không được bỏ tróng! ");
        form.txtHoTen.focus();
        return false;
    }

    //Kiểm tra tuổi
    var d = new Date();
    var tuoi = d.getFullYear() - parseInt(form.optNamSinh.value);

    if(tuoi < 16){
        alert("Năm sinh không hợp lệ !, Ứng viên phải từ 16 tuổi trở lên. ");
        form.optNamSinh.focus();
        return false;
    }

    //Kiểm tra chekbox 
   if(!form.chkHinhThucToanTG.checked && !form.chkHinhThucBanTG.checked){
        alert("Phải chọn ít nhất một hình thức làm việc! ");
        return false;
    }
    return true;
}
//Bắt sự kiện submit form 
form.addEventListener("submit", function(e){
    if(!KiemTraForm()){
        e.preventDefault();
        return;
    }
    if(!KiemTraLuong()){
        e.preventDefault();
        return;
    }
    hienthithongtin();
});

//Bắt sự kiên change mức lương 
form.txtMucLuong.addEventListener("change", KiemTraLuong);

//Form hiển thị thông tin 
function hienthithongtin(){
    const hoten = form.txtHoTen.value;
    const namsinh = form.optNamSinh.value;
    const mucluong = form.txtMucLuong.value;
    const thongtin = form.txtThongTin.value;

    //Lấy giới tính 
    let gioitinh = "";
    const gt = document.getElementsByName("radGioiTinh");

    if(gt[0].checked){
        gioitinh = gt[0].value;
    }else{
        gioitinh = gt[1].value;
    }

    //Lấy hình thức làm việt
    let hinhthuc = "";

    if(form.chkHinhThucToanTG.checked){
        hinhthuc += form.chkHinhThucToanTG.value + " ";
    }
    if(form.chkHinhThucBanTG.checked){
        hinhthuc += form.chkHinhThucBanTG.value;
    }
    //Mở cửa sổ mới 
    const csMoi = window.open("","_blank");

    csMoi.document.write("Cảm ơn! Bên dưới là thông tin đăng ký của bạn: ");
    csMoi.document.write("<br>Họ tên: " + hoten);
    csMoi.document.write("<br>Năm sinh: " + namsinh);
    csMoi.document.write("<br>Giới tính: " + gioitinh);
    csMoi.document.write("<br>Mức lương đề nghị: " + mucluong);
    csMoi.document.write("<br>Hình thức làm việc: " + hinhthuc);
    csMoi.document.write("<br>Thông tin bổ sung: " + thongtin);
}

