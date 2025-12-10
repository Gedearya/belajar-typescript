// =============================
//  1. BASIC TYPE ANNOTATION
// =============================
// Type primitive
var username = "Gedearya";
var age = 24;
var isDev = true;
// Tipe array
var skills = ["HTML", "CSS", "JavaScript", "TypeScript"];
// Union type (bisa lebih dari satu tipe)
var id = "USR-001";
console.log("User:", username);
console.log("Skills:", skills);
// =============================
//  2. FUNCTION DENGAN TIPENYA
// =============================
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet(username));
// Function dengan optional parameter
function sum(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log("Sum:", sum(3, 4)); // c tidak diisi → default 0
var userData = {
    id: 1,
    name: "Gedearya",
    email: "gede@example.com",
    isActive: true,
};
console.log("User Data:", userData);
// =============================
//  4. CLASS OOP SEDERHANA
// =============================
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound!"));
    };
    return Animal;
}());
var cat = new Animal("Mochi");
cat.speak();
// =============================
//  5. GENERIC (untuk pemula)
// =============================
function wrap(value) {
    return [value];
}
console.log(wrap(123));
console.log(wrap("Hello TypeScript"));
var currentStatus = "loading";
console.log("Status:", currentStatus);
