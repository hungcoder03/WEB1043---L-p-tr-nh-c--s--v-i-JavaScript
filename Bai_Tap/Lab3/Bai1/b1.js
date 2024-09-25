var a = prompt("Nhập A: ");
var b = prompt("Nhập B: ");
var o = prompt("Toán tủ: ");

document.write("A = " + a + "<br>" + "B = " +b+ "<br>");

switch (o) {
    case '+':
        var kq = Number(a) + Number(b);
        document.write("A + B = " + kq);
        break;
    case '-':
        var kq = Number(a) - Number(b);
        document.write("A - B = " + kq);
        break;
    case '*':
        var kq = Number(a) * Number(b);
        document.write("A * B = " + kq);
        break;
    case '/':
        var kq = Number(a) / Number(b);
        document.write("A / B = " + kq);
        break;
    default:
        alert(o + "Không phải là toán tử!");
        break;
}