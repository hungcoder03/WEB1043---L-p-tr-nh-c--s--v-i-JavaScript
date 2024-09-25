var newWindow;

function getBrowserName() {
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf("Edg") > -1) {
        return "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Google Chrome";
    } else {
        return "Unknown browser";
    }
}

function openWindow() {
    //Kiểm tra
    var width, height;
    // width = 150;
    // height = 150;
    if (getBrowserName() === "Microsoft Edge") {
        // Nếu là Internet Explorer
        width = 100;
        height = 100;
    } else if (getBrowserName() === "Google Chrome") {
        // Nếu là Chrome
        width = 150;
        height = 150;
    } else if (getBrowserName() === "Unknow browser") {
        alert("Trình duyệt không xác định. Không thể mở thẻ mới!!");
        return;
    }

    //Mở cửa số mới với kích thước phụ thuộc vào trình duyệt
    newWindow = window.open("", "newWindow", 'width=${width},height=${height},toolbar=yes,menubar=yes');

}

function closeWindow() {
    if (newWindow) {
        newWindow.close();
    }
}

function checkWindow() {
    if (!newWindow || newWindow.closed) {
        alert("Cửa sổ mới đã được đóng");
    } else {
        alert("Cửa sổ mới vẫn đang mở");
    }
}