// var arr=['Kéo', 'Búa', 'Bao'];
// var x;

function mayTinh() {
    return Math.floor(Math.random() * 3); //Lấy số ngẫu nhiên 0 - 2
}

function getResult(arr) {
    switch(arr) {
        case 'Kéo':
            if (mayTinh() == 0) {
                alert("Máy ra Kéo - Hòa");
            } else if (mayTinh() == 1) {
                alert("Máy ra Bao - Thắng");
            } else {
                alert("Máy ra Búa - Thua");
            }
            break;
        case 'Búa':
            if (mayTinh() == 0) {
                alert("Máy ra Kéo - Thắng");
            } else if (mayTinh() == 1) {
                alert("Máy ra Bao - Thua");
            } else {
                alert("Hòa");
            }
            break;
        case 'Bao':
            if (mayTinh() == 0) {
                alert("Máy ra Kéo - Thua");
            } else if (mayTinh() == 1) {
                alert("Máy ra Bao - Hòa");
            } else {
                alert("Máy ra Búa - Thắng");
            }
            break;
        default:
            break;
    }
}

