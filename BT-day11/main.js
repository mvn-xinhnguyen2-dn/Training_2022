/* # Javascript ES6 Exercise
​
### Convert the code below from ES5 to ES6 and answer the question
​
1. Define a variable
  - ES5
  ```
  var MAX_SIZE = 25 * 1024 * 1024;
  var title = 'Hello World';
  title = 'Hello ES6'
  ```*/
  let MAX_SIZE = 25 * 1024 * 1024
  let title = 'Hello World'
  title = 'Hello ES6'
  const numPi = 3.14

/*- Question: Let and Const – What's the Difference?
      #let: dùng để khai báo biến. Let không cho phép đặt tên biến bị trùng, trong khi var có thể.
      #const: dùng để khai báo hằng số. có giá trị không đổi. tuy nhiên đối với hằng ở dạng object thì có thể thay đổi giá trị.
      cả let và const dùng để khai báo biến trong block scope, (chỉ tồn tại trong cặp ngoặc{}). khi ra ngoài cặp {} biến sẽ được giải phóng bộ nhớ.

2. String Interpolation
  - ES5
  ```
  var user = { name: 'David' };
  var card = { amount: 7, product: "Bar", unitprice: 42 };
  var message = "Hello " + user.name + ",\n" +
  "want to buy " + card.amount + " " + card.product + " for\n" +
  "a total of " + (card.amount * card.unitprice) + " bucks?";
  ```
​*/
  let user = { name: 'David' }
  let card = { amount: 7, product: "Bar", unitprice: 42 }
  let message = `Hello  ${user.name},\n
  want to buy ${card.amount} ${card.product} \n a total of ${(card.amount * card.unitprice)} bucks?`
  console.log(message)

/* 3. Rest Parameter
  - ES5
  ```
  function foo(x, y) {
      var a = Array.prototype.slice.call(arguments, 2);
      return (x + y) * a.length;
  };
  foo(1, 2, 'hello', true, 7) === 9;
  ``` */
  function foo(x, y,...a) {
    return (x + y) * a.length;
  }
  console.log(foo(1, 2, 'hello', true, 7) === 9)

/* 4. Default Parameter Values
  - ES5
  ```
  function sum(x, y, z) {
    if (y === undefined) {
      y = 7;
    }
    if (z === undefined) {
      z = 42;
    }
    return x + y + z;
  };
  ```*/
  function sum(x, y = 7, z = 42) {
    return x + y + z
  }
  console.log(sum(10))

/* 5. Arrow Functions
  - ES5
  ```
  var evens = [1, 2, 3, 4, 5, 6];
  var odds  = evens.map(function (v) { return v + 1; });
  var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
  var nums  = evens.map(function (v, i) { return v + i; });
  var fives = [];
  nums.forEach(function (v) {
    if (v % 5 === 0) {
      fives.push(v);
    }
  });
  ```*/
  let evens = [1, 2, 3, 4, 5, 6]
  let odds  = evens.map(v => v + 1 )
  let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
  let nums  = evens.map((v, i) => v + i)
  let fives = []
  nums.forEach(v => {
    if (v % 5 === 0) {
      fives.push(v)
    }
  })

  console.log(odds)
  console.log(pairs)
  console.log(fives)
  console.log(nums)

/* 6. Classes
  - ES5
  ```
  var Shape = function(id, x, y) {
    this.id = id;
    this.move(x, y);
  };
  Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
  };
  ```*/
  class Shape {
    constructor (id, x, y) {
      this.id = id
      this.move(x, y)
    }
    move (x, y) {
      this.x = x
      this.y = y
    }
  }

  let number = new Shape(1, 10, 20)
  console.log(number)
  console.log(number.constructor)

/* 7. Modules

8. Promise
  - ES5
  ```
  function showMessAfterTimeout(msg, who, timeout, onDone) {
    setTimeout(function () {
      onDone(msg + ' Hi ' + who + '!');
    }, timeout);
  }
  showMessAfterTimeout('', 'Foo', 100, function(msg) {
    showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
      console.log('Finish after 300ms:' + msg);
    });
  });
  ```*/
  function showMessAfterTimeout(msg, who, timeout) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
  }
  showMessAfterTimeout('', 'Foo', 100).then((msg) => 
    showMessAfterTimeout(msg, 'Bar', 200)
  ).then((msg) => {
      console.log(`Finish after 300ms: ${msg}`)
  })

/* 9. Loops
  - Give an example for each method: 
    + for…of
    + findIndex()*/

  // for…of
  let arrayNumber = [2, 3, 7, 8, 4]
  let sumEven = 0
  let sumOdd = 0
  for (let value of arrayNumber) {
    if (value % 2 === 0) {
      sumEven += value
    }
  }
  for (let i in arrayNumber) {
    if (arrayNumber[i] % 2 !== 0) {
      sumOdd += arrayNumber[i]
    }
  };
  console.log(sumEven)
  console.log(sumOdd)
  
  // findIndex(): duyệt qua các ptu, trả về vị trí phần tử tmđk đầu tiên.
  const language = ['JS', 'PHP', 'C#', 'C++', 'PYTHON', 'CSS']
  language.findIndex(check)

  function check(language) {
    return language.slice(0, 1) == 'C'
  };
  console.log(language.findIndex(check))
