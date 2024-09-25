function tinhChiSo() {
    let kg = prompt("Nhập trọng lượng cơ thể (kg): ");
    let chieuCao = prompt("Nhập chiều cao (m): ");

    let BMI = (kg)/(chieuCao*chieuCao);

    alert("Chỉ số BMI: " +BMI.toFixed(2));

    if (BMI < 18.5) {
        alert("Thiếu cân");
    } else if (BMI >= 18.5 && BMI < 25) {
        alert("Bình thường");
    } else if (BMI >= 25 && BMI < 30) {
        alert("Thừa cân")
    } else {
        alert("Béo phì");
    }
}

tinhChiSo();