// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const fruitWithLowestQuantity = inventory.reduce((lowest, fruit) => {
  console.log(fruit["quantity"])
  console.log(lowest["quantity"])
  let amount = {name:"", quantity:0}  
  if (lowest["quantity"] < fruit["quantity"]) {
    console.log("a")
  amount = {name: lowest.name, quantity: lowest.quantity}
    console.log(amount)
  }
  else {amount = {name: fruit.name, quantity: fruit.quantity}} 
    console.log(amount)
  return amount 
})
  console.log(fruitWithLowestQuantity)

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruitWithLowestQuantity.name} ซึ่งมี ${fruitWithLowestQuantity.quantity} ชิ้น`)