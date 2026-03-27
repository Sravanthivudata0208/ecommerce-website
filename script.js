let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCart();

function addToCart(name,price){

let item = cart.find(p => p.name === name);

if(item){
item.quantity++;
}else{
cart.push({name:name,price:price,quantity:1});
}

updateCart();
}

function updateCart(){

let cartItems = document.getElementById("cart-items");

cartItems.innerHTML="";

let total=0;
let count=0;

cart.forEach((item,index)=>{

let li=document.createElement("li");

li.innerHTML=`

<div class="cart-item">

<span>${item.name} - $${item.price}</span>

<div class="cart-controls">

<button onclick="increase(${index})">+</button>

<span>${item.quantity}</span>

<button onclick="decrease(${index})">-</button>

<button class="delete" onclick="removeItem(${index})">X</button>

</div>

</div>

`;

cartItems.appendChild(li);

total+=item.price*item.quantity;

count+=item.quantity;

});

document.getElementById("total").innerText=total;

document.getElementById("cart-count").innerText=count;
localStorage.setItem("cart", JSON.stringify(cart));

}

function increase(i){
cart[i].quantity++;
updateCart();
}

function decrease(i){

if(cart[i].quantity>1){
cart[i].quantity--;
}else{
cart.splice(i,1);
}

updateCart();

}

function removeItem(i){
cart.splice(i,1);
updateCart();
}

function openCart(){
document.getElementById("cart").style.display="block";
}

function closeCart(){
document.getElementById("cart").style.display="none";
}

function searchProducts(){

let input=document.getElementById("search").value.toLowerCase();

let products=document.querySelectorAll(".product");

products.forEach(product=>{

let name=product.querySelector(".product-name").innerText.toLowerCase();

if(name.includes(input)){
product.style.display="block";
}else{
product.style.display="none";
}

});

}

function goToCheckout(){
window.location.href="checkout.html";
}