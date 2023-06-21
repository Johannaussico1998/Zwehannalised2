//const cartIcon=document.querySelector("#cart-icon");
//const cart=document.querySelector(".cart");
//const closecart=document.querySelector("#close-cart");

//cartIcon.addEventListener("click",()=>{
    //cart.classList.add("active");
//});
//closecart.addEventListener("click",()=>{
    //cart.classList.remove("active");
//});
//if(document.readyState=="loading"){
  //  document.addEventListener('DOMContentLoaded',start);
//}else{
  //  start();
//}
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('show');
  }
});
var cartItems = [];

function addToCart(name, price) {
  var item = { name: name, price: price };
  cartItems.push(item);
  renderCart();
}

function renderCart() {
  var cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  
  var total = 0;

  if (cartItems.length === 0) {
    cartDiv.innerHTML = 'Your cart is empty.';
  } else {
    var ul = document.createElement('ul');
    for (var i = 0; i < cartItems.length; i++) {
      var li = document.createElement('li');
      li.textContent = cartItems[i].name + ' - R' + cartItems[i].price;
      ul.appendChild(li);

      total += cartItems[i].price;
    }

    cartDiv.appendChild(ul);
    cartDiv.innerHTML += '<strong>Total: R' + total.toFixed(2) + '</strong>';
  }
}
//function start(){
 //   addEvents();
//}
//function update(){
  //  addEvents();
    //updateTotal();
//}
//function addEvents(){
  //  let cartRemove_btns=document.querySelectorAll('.cart-remove');
    //console.log(cartRemove_btns);
    //cartRemove_btns.forEach((btn)=>{
      //  btn.addEventListener("click",handle_removeCartItem);
    //});
    //let cartQuantity_inputs=document.querySelectorAll('.cart-quantity')
    //cartQuantity_inputs.forEach(input=>{
      //  input.addEventListener("change",handle_changeItemQuantity);
    //});
    //let addCart_btns=document.querySelectorAll(".add-cart");
    //addCart_btns.forEach(btn=>{
      //  btn.addEventListener("click",handle_addCartItem);
    //});

    //const buy_btn=document.querySelector(".btn-buy");
    //buy_btn.addEventListener("click",handle_buyOrder);
//}
//function handle_addCartItem(){
  //  let product=this.parentElement;
    //let title=product.querySelector(".product-title").innerHTML;
    //let price=product.querySelector(".product-price").innerHTML;
    //let imgSrc=product.querySelector(".product-IMG").src;
    //console.log(title,price,imgSrc);

    //let newToAdd={
      //  title,
        //price,
        //imgSrc,
    //};

    //if (itemsAdd.find(el=>el.title==newToAdd.title)){
      //  alert("This Item Is Already In The Cart");
        //return;
        //itemsAdd.push(newToAdd);
    //}

    //let cartBoxElement = cartBoxComponent(title,price,imgSrc,)
      //  let newNode=document.createElement("div");
        //newNode.innerHTML=cartBoxElement;
        //const cartContent=cart.querySelector(".cart-content");
        //cartContent.appendChild(newNode);

        //update()

//} 
//function handle_removeCartItem(){
  //      this.parentElement.remove();

    //    itemsAdded=itemsAdded.filter(el=>el.title !=this.parentElement.querySelector('cart-product-title').innerHTML)
      //  update()
    //}
//function handle_removeCartItem(){
  // this.parentElement.remove();

    //update();
//}
//function handle_changeItemQuantity(){
  //  if(isNaN(this.Value)||this.Value<1){
    //    this.Value=1;
    //}
    //this.value=Math.floor(this.value);
    //update();
//}
//function handle_buyOrder(){
  //  if(itemsAdded.length<=0){
    //    alert("There Is No Order Yet! \n Please Make An Order First.");
      //  return;
    //}
    //const cartContent=cart.querySelector(".cart-content");
    //cartContent.innerHTML="";
    //alert("Your Order Has Been Placed Succesfully!");
    //itemsAdded=[];
    //update();
//}
//function updateTotal(){
  //  let cartBoxes=document.querySelectorAll('.cart-box');
    //const totalElement=cart.querySelector('.total-price');
    //let total=0;
    //cartBoxes.forEach((cartBox)=>{
      //  let priceElement=cartBox.querySelector(".cart-price");
        //let price=parseFloat(priceElement.innerHTML.replace("R",""));
        //let quantity=cartBox.querySelector(".cart-quantity").Value;
      //  total+=price*quantity;
    //});

    //total=total.toFixed(2);
    //total=Math.round(total*100)/100;
    //totalElement.innerHTML= "R" + total;
//}

//function CartBoxComponent(title,price,imgSrc){
  //  return `
    //    <div class="cart-box">
      //  <img src=R{imgSrc} alt="" class="cart-img">
        //<div class="detail-box">
          //  <div class="cart=product-title">R{title}</div>
            //<div class="cart-price">R199{price}</div>
            //<input type="number" value="1" class="cart-quantity">
        //</div>
        //<i class="fa-solid fa-trash"></i>
        //</div>`;
//}
