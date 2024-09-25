function zoomIn(img) {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s ease";
}

function zoomOut(img) {
    img.style.transform = "scale(1)";
}
// Lấy phần tử ảnh và menu
function hienThiMenu() {
    const productImg = document.querySelector('.product-img img');
    const menu = document.querySelector('.menu');

    // Khi di chuột vào ảnh, làm mờ và hiển thị menu
    productImg.addEventListener('mouseover', function () {
        productImg.classList.add('hovered'); // Làm mờ ảnh
        menu.style.display = 'flex'; // Hiển thị menu
    });

    // Khi rời chuột khỏi ảnh, xóa hiệu ứng
    productImg.addEventListener('mouseout', function () {
        productImg.classList.remove('hovered'); // Bỏ làm mờ ảnh
        menu.style.display = 'none'; // Ẩn menu
    });
}

hienThiMenu();


function toggleProduct() {
    const productList = document.getElementById('productList');
    const toggleButton = document.getElementById('toggleButton');

    if (productList.style.display === 'none') {
        productList.style.display = 'block'; // Hiển thị sản phẩm
        toggleButton.textContent = 'Ẩn Sản Phẩm'; // Đổi text button
    } else {
        productList.style.display = 'none'; // Ẩn sản phẩm
        toggleButton.textContent = 'Hiển Thị Sản Phẩm'; // Đổi text button
    }
}




