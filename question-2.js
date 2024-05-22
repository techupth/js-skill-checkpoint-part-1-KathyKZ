// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

const uptodateInventory = inventory.reduce(acc, fruit) => {
  if (fruit.name === "Apple") {
    acc.push(fruit, quantity: 200);
    return acc;
  }
}


inventory.push({ name: "Orange", price: 20, quantity: 300})
console.log(inventory)

const totalValue = inventory.reduce

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalValue} บาท`)