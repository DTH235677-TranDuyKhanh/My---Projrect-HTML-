function htGio(){
    var d = new Date();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();

    var s = (gio > 12) ? (gio - 12) : gio;
    s += ((phut < 10 ) ? ':0' : ':') + phut;
    s += ((giay < 10) ? ':0' : ':') + giay;
    s += (gio >12) ? 'Chiều' : 'Sáng';

    document.getElementById('dongho').innerHTML = s;
    var t = setTimeout('htGio()', 1000);
}