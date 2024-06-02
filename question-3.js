// Question #3
let userPassword1 = "testing";
let userPassword2 = "testingpassword";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
 const length = userPassword.length;
 if (length < 6) {
    return "Weak";
 }  else if (length <= 10) {
    return "Medium";
 }  else if (length > 10) {
    return "Strong";
 }
}

console.log(checkPasswordStrength(userPassword1));
console.log(checkPasswordStrength(userPassword2))