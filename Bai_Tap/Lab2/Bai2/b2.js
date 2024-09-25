function doiDonVi() {
    let m = prompt("Nhập giá trị cần chuyển đổi (m2): ");

    let sao = m/360;
    let mau = sao/10;
    let ha = mau;

    document.write(m + " (m2) = " +sao + " (sào) = " +mau + " (mẫu) = "  +ha+ " (ha)")
}

doiDonVi();