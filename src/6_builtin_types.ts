let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level; // any
// level = 1;
// level = 'a';

// any
function render(document: any) {
    console.log(document);
}

// array
let numbers: number[] = [];

//tuples
let user3: [number, string] = [1, 'Mosh'];
// user3.push(1); // gap in typescript

// enums
// list of realted constants
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
enum Size { Small=1, Medium, Large } 
// by default tsc assigned the first member value of 0 and other 1, 2, and so on
// or explicitly set values
// enum Size { Small=1, Medium=2, Large=3 }
// or 
// enum Size { Small='s', Medium='m', Large='l' } 

let mySize: Size = Size.Medium;
console.log(mySize);