//Tạo mảng
const mainArray = [];

//Tạo đối tượng
const item1 = {
    name: "Laptop",
    model: "Dell XPS 13",
    cost: 1200,
    quantity: 5
};

const item2 = {
    name: "Smartphone",
    model: "iPhone 14",
    cost: 999,
    quantity: 10
};

const item3 = {
    name: "Headphones",
    model: "Sony WH-1000XM4",
    cost: 350,
    quantity: 15
};

//Đưa đối tượng vào mảng
mainArray.push(item1);
mainArray.push(item2);
mainArray.push(item3);

//In ra console
console.dir(mainArray);
console.log("Quantity Item3: ",mainArray[2].quantity);

//Tạo đối tượng mới và thêm vào mảng
const item4 = {
    name: "Tablet",
    model: "Samsung Galaxy Tab S8",
    cost: 600,
    quantity: 8
};
inventoryArray.push(item4);

// Truy xuất thông tin của item mới
console.log("New Item Added:", inventoryArray[3]);