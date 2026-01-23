//          iv. payment.js - Payment processing
   import { reduceStock } from './product.js'
   import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
let items = getCartItems();
let subtotal = getCartTotal();
if(items.length === 0) 
  return { status: 'failed', message: 'Cart is empty' }; 
// 2. Apply discount if coupon provided
if(couponCode) {
  let discountDetails = applyDiscount(subtotal, couponCode, items);
  subtotal = discountDetails.originalTotal;
}
// 3. Validate payment method (card/upi/cod)
if(!validatePaymentMethod(paymentMethod)) 
  return { status: 'failed', message: 'Invalid payment method' };
// 4. Process payment (simulate)
let paymentStatus = 'true'
if(paymentStatus === 'true')
  return { status: 'success', message: 'Payment successful' };
else
  return { status: 'failed', message: 'Payment failed' };
// 5. Reduce stock for all items
items.forEach(item => reduceStock(item.id, item.quantity));

// 6. Clear cart
clearCart();
// 7. Generate order summary
return {
  orderId: generateOrderId(),
  items,
  subtotal,
  discount: discountDetails ? discountDetails.discount : 0,
  total: discountDetails ? discountDetails.total : subtotal,
  paymentMethod,
  status: 'success',
  message: 'Payment successful'
}
                            
// Return order summary:
// {
//   orderId: ...,
//   items: [...],
//   subtotal: ...,
//   discount: ...,
//   total: ...,
//   paymentMethod: ...,
//   status: 'success/failed',
//   message: '...'
// }
}

export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
return ['card', 'upi', 'cod'].includes(method);
}
                          
function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}
