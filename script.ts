// =============================
//  1. BASIC TYPE ANNOTATION
// =============================

// Type primitive
let username: string = "Gedearya";
let age: number = 24;
let isDev: boolean = true;

// Tipe array
let skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];

// Union type (bisa lebih dari satu tipe)
let id: number | string = "USR-001";

console.log("User:", username);
console.log("Skills:", skills);

// =============================
//  2. FUNCTION DENGAN TIPENYA
// =============================

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(username));

// Function dengan optional parameter
function sum(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0);
}

console.log("Sum:", sum(3, 4)); // c tidak diisi → default 0
