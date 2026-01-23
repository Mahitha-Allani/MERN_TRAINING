// ii. cart.js - Shopping cart operations
 import { getProductById, checkStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
// 1. Get product details
const product = getProductById(productId);
  if (!product) return 'Product not found';

  if (!checkStock(productId, quantity)) {
    return 'Insufficient stock';
  }

// 2. Check stock availability
// 3. Check if product already in cart
//    - If yes, update quantity
//    - If no, add new item
// 4. Return success/error message
const item = cartItems.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
  }
   else {
    cartItems.push({ productId, quantity });
  }

  return 'Item added to cart Success';
}

                          
export function removeFromCart(productId) {
// Remove product from cart
cartItems=cartItems.filter(item => item.productId !== productId);
return 'Item removed from cart';


}

export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
if(!checkStock(productId, newQuantity)){
  return 'Insufficient stock';
}
}
                          
export function getCartItems() {
// Return all cart items with product details
return cartItems;
}

export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
return getCartItems().reduce((total, item) => {
  const product = getProductById(item.productId);
  return total + product.price * item.quantity;
}, 0);
}
                          
export function clearCart() {
// Empty the cart
cartItems = [];
return 'Cart cleared';
}