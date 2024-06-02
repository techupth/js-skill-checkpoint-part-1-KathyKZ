// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({id: 5, todo: "Walk the dog"})
console.log(myTodo)

console.log(myTodo[3].todo)

myTodo[3]["todo"] = "Go to the gym"
console.log(myTodo[3].todo)

myTodo.pop()
console.log(myTodo)

//ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ
//"To-do id: <ค่าของ id>, <ค่าของ todo>" (ห้าม Hard-Code ค่าเข้าไปใน String

console.log(`To-do id: ${myTodo[3].id}, ${myTodo[3].todo}`)
