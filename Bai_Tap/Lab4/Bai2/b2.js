var sinhVien = new Object();

sinhVien.hoTen = prompt("Họ và tên: ");
sinhVien.diem = prompt("Điểm trung bình: ");

sinhVien.hienThi = function() {
    // var hocLuc = null;
    if (this.diem >= 5) {
        this.hocLuc = "Đậu";
    } else {
        this.hocLuc = "Rớt";
    } 

    document.write("<h3>Họ và tên: " +this.hoTen+ "</h3>");
    document.write("<h3>Điểm trung bình: " +this.diem+ "</h3>");
    document.write("<h3>Học lực: " +this.hocLuc+ "</h3>");
}