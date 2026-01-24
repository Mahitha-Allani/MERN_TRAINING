//          iii. discount.js - Coupon and discount logic
// Available coupons
const coupons = {
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// TODO: Implement these functions
                          
export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
let coupon = coupons[couponCode];
if (!coupon) return { valid: false, message: 'Invalid coupon code' };
// 2. Check minimum amount requirement
if(cartTotal<coupon.minAmount)return{valid:false,message:'Minimum amount not met '}

// 3. Check category requirement (if any)
if(coupon.category){
    let categoryMatch = cartItems.some(item => item.category === coupon.category);
    if(!categoryMatch) return { valid: false, message: 'Category requirement not met' };
}
// Return { valid: true/false, message: '...' }
return { valid: true, message: 'Coupon is valid' };
}
                          
export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
let  coupon = coupons[couponCode];
if(coupon.type === 'percentage')
 return cartTotal * (coupon.value / 100);
if(coupon.type === 'flat') 
 return coupon.value
// Return discount amount

}
                          
export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
let validCoupon = validateCoupon(couponCode, cartTotal, cartItems);
if(!validCoupon.valid)
 return { originalTotal: cartTotal, 
discount: 0, finalTotal: cartTotal, 
message: validCoupon.message };
// 2. If valid, calculate discount
let discount = calculateDiscount(couponCode, cartTotal);

// 3. Return final amount and discount details
return  { originalTotal: cartTotal,
discount: discount,
finalTotal: cartTotal - discount,
message: 'Discount applied' };

// Return { 
//   originalTotal: ..., 
//   discount: ..., 
//   finalTotal: ...,
//   message: '...'
// }
}