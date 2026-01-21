/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/
let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// 1. filter() to get only inStock products
let inStockProducts = cart.filter(product => product.inStock);
console.log("In Stock Products:", inStockProducts);
// 2. map() to create a new array with:  { name, totalPrice }
let productTotals = cart.map(element => ({ name: element.name,
    totalPrice: element.price * element.quantity
}));
console.log("Product Totals:", productTotals);
// 3. reduce() to calculate grand total cart value
let grandTotal = cart.reduce((total, product) => 
    total + (product.price * product.quantity), 0);
console.log("Grand Total Cart Value:", grandTotal);
//4.find() to get details of "Mouse"
let mouseDetails=cart.find(product=>product.name==="Mouse")
console.log("Details of Mouse:",mouseDetails)   
//5.findIndex() to find the position of "keyboard"
let positionOf=cart.findIndex(product=>product.name==="Keyboard")
console.log("Position of Keyboard:",positionOf)