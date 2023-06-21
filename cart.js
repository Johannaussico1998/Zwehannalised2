
const menuIcon = document.querySelector('.menu-icon'); 
 const menu = document.querySelector('.menu'); 
  
 menuIcon.addEventListener('click', () => { 
   menu.classList.toggle('show'); 
 }); 
  
 window.addEventListener('resize', () => { 
   if (window.innerWidth > 768) { 
     menu.classList.remove('show'); 
   } 
 });
// Select all add-to-cart buttons
const addButtons = document.querySelectorAll('.add-to-cart');

// Select cart items list
const cartItems = document.querySelector('#cart-items');

// Select checkout button
const checkoutButton = document.querySelector('#checkout-button');

// Initialize cart
let cart = [];

// Add event listener to each add-to-cart button
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    // Check if item already exists in cart
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
      // Increment item quantity if already in cart
      cart[itemIndex].quantity++;
    } else {
      // Add item to cart if not already in cart
      cart.push({ name: name, price: price, quantity: 1 });
    }

    // Update cart display
    updateCartDisplay();
  });
});

// Remove event listener for each remove-from-cart button
cartItems.addEventListener('click', event => {
  if (event.target.classList.contains('remove-from-cart')) {
    const name = event.target.dataset.name;

    // Find index of item to remove from cart
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
      // Decrement item quantity if greater than 1, otherwise remove item from cart
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity--;
      } else {
        cart.splice(itemIndex, 1);
      }

      // Update cart display
      updateCartDisplay();
    }
  }
});

// Add event listener to checkout button
checkoutButton.addEventListener('click', () => {
  // Do something when checkout button is clicked, such as redirecting to a checkout page or displaying a confirmation message

    // Display a confirmation message
    alert('Thank you for your purchase,press OK to fill up payment details!');
  
    // Clear cart and update cart display
    cart = [];
    updateCartDisplay();
  });
  

// Update cart display
function updateCartDisplay() {
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.quantity}x ${item.name} - R${(item.price * item.quantity).toFixed(2)}
      <button class="remove-from-cart" data-name="${item.name}">Remove</button>`;
    cartItems.appendChild(li);
  });

  // Display total price of all items in cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalP = document.createElement('p');
  totalP.innerHTML = `Total: R${totalPrice.toFixed(2)}`;
  cartItems.appendChild(totalP);

  // Display checkout button if cart is not empty
  if (cart.length > 0) {
    checkoutButton.style.display = 'block';
  } else {
    checkoutButton.style.display = 'none';
  }
}
