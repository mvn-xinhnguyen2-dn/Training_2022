
var productInfo = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-01.jpg',
    price: 100
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-02.jpg',
    price: 120
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-03.jpg',
    price: 110
  },
  {
    id: 4,
    title: 'Product 4',
    image: 'https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-04.jpg',
    price: 125
  }
]
// print product HTML.
var product = '';
var $productList = document.getElementById('product-list')
for (var i = 0 ; i < productInfo.length; i++) {
  product += '<li class="product-item col-lg-3"><img src="' + productInfo[i].image + '">' +
    '<h3 class="product-title">' + productInfo[i].title + '</h3>' +
    '<p class="product-price">$ ' + productInfo[i].price + '</p>' +
    '<button type="button" id="btn-add-' + productInfo[i].id+'" onClick="reply_click(this.id)" class="btn add2cart">Add to cart</button></li>'
}
$productList.innerHTML = product;


//click to add item
function reply_click(click_id) {
  var $item = document.getElementById(click_id);
  //add item into localStorage
  var id = parseInt(click_id.slice(-1)) - 1;
  addItem2Local({
    id: productInfo[id].id,
    image: productInfo[id].image,
    title: productInfo[id].title,
    price:productInfo[id].price 
  })
}
function addItem2Local(itemA) {
  var itemLocals = JSON.parse(localStorage.getItem('product')) || [];
  itemLocals.push(itemA);
  localStorage.setItem('product', JSON.stringify(itemLocals));
  var num = itemLocals.length;
  localStorage.setItem('numberCart', num);
  var $numberItems = document.getElementById('number-item');
  $numberItems.innerHTML = localStorage.getItem('numberCart');
}

//add number of item in cart
var cart = JSON.parse(localStorage.getItem('product')) || [];
var num = cart.length;
localStorage.setItem('numberCart', num);
var $numberItems = document.getElementById('number-item');
$numberItems.innerHTML = localStorage.getItem('numberCart');
