function displayTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    document.getElementById("timeDisplay").innerHTML = h + ":" + m + ":" + s;
}
//Gọi hàm displayTime mỗi giây (1000ms)
setInterval(displayTime, 1000);

//Gọi hàm ngay lập tức khi trang web tải xong
displayTime();
