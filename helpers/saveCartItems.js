const saveCartItems = (cartItems, element) => {
  localStorage.setItem(cartItems, element);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
