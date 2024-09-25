function canhHuyen() {
    let a = prompt("Nhập cạnh a: ");
    let b = prompt("Nhập cạnh b: ");

    a = parseFloat(a);
    b = parseFloat(b);
    
    let c;
    c = Math.sqrt(a*a + b*b);
    
    console.log("Cạnh huyền là : " + c);
    document.write("Cạnh huyền là : " +c.toFixed(2));
}

canhHuyen();
