//update number of item in cart
var cart = JSON.parse(localStorage.getItem('product')) || [];
var num = cart.length;
localStorage.setItem('numberCart', num);
var $numberItems = document.getElementById('number-item');
$numberItems.innerHTML = localStorage.getItem('numberCart');

// Print items in cart 
var newEl = ''
var $tbody = document.getElementById('insert-content');
for (var index = 0; index < cart.length; index++) {
  newEl += '<tr id="' + cart[index].id + '"><td>' + (index+1) + '</td><td class=image><img src="' + 
  cart[index].image + '"</td><td>' + cart[index].title + 
  '</td><td>' + cart[index].price + 
  '</td><td><button type ="button" onclick="remove(this)" class="btn remove">Remove</button></td></tr>'
};
console.log('hello')

// remove item in cart
function remove($this, id) {
  var $trParent = $this.closest('tr');
  var idItem = $trParent.getAttribute('id');
  console.log(idItem)

  if (confirm('Are you sure?')) {
    $tbody.removeChild($trParent);
    removeItemLocal(idItem);
    location.reload()
    console.log(idItem)
  }
}

// remove item in local
var removeItemLocal = function(id) {
  var newData = cart.filter(function(e) {
    return e.id != id;
  });
  // console.log(cart)
  localStorage.setItem('product', JSON.stringify(newData));
  console.log(id)
};

$tbody.innerHTML = newEl;
