// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
    const totalPrice = products.reduce((total, products) => {
      return total + (products.price * products.quantity);
    }, 0);

    console.log(totalPrice)
    if (promotionCode === "") {
      return totalPrice
    }
    else if (promotionCode === "SALE20") {
      return totalPrice * 0.8
    }
    else if (promotionCode === "SALE50") {
      return totalPrice * 0.5
    }
}
    console.log(calculateTotalPrice(products,promotionCode))