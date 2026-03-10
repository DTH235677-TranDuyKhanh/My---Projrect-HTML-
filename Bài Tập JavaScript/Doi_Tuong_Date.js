function thoigian(){
    var hientai = new Date();
    var ngay = hientai.getDate();
    var thang = hientai.getMonth() + 1;
    var nam = hientai.getFullYear();

    var thu = hientai.getDay();

    switch(thu)
    {
        case 0: thu = "Chủ nhật";
            break;
        case 1: thu = "Thứ hai";
            break;
        case 2: thu = "Thứ ba";
            break;
        case 3: thu = "Thứ tư";
            break;
        case 4: thu = "Thứ năm";
            break;
        case 5: thu = "Thứ sáu";
            break;
        case 6: thu = "Thứ bảy";
            break;
    }
    document.write("Hôm nay la: "+thu+" ngay"+ngay+" tháng"+thang+" năm"+nam);
}