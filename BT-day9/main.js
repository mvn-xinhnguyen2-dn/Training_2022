/* 
# HTML + Javascript Exercise
​
### Knowledge round-up
​
- **Javascript**
​
  1. - What are the differences between a variable that is: `null`, `undefined`?
  --->  giống nhau: là biến không có giá trị. 
  ---> `null`:có nghĩa là giá trị rỗng hoặc giá trị không tồn tại, không có sẵn 
        nó có thể được sử dụng để gán như là một đại diện không có giá trị.
  ---> `undefined`: giá trị không xác định, khi biến chưa được khởi tạo
        giá trị thì biến đó sẽ là undefined. Làm rỗng biến bằng cách gán là undefined.
  */
    var test1 = null
    var test2 = undefined
    console.log("1.so sánh null và undefined")
    console.log(test1==test2)  //true
    console.log(test1===test2) //false do khác kiểu dữ liệu, null có kiểu dữ liệu là object
    console.log(typeof(test1)) 
    console.log(typeof(test2)) 

  /*
  2. - What is `use strict`? what are the advantages and disadvantages to using it?
  ---> `use strict`: được sử dụng ở đầu chương trình hoặc ở đầu hàm, giúp viết mã js an toàn hơn
        bằng cách tạo ra lỗi nếu biến toàn cục được tạo ra do nhầm lẫn.
  ---> Được khai báo ở đầu tập lệnh, nó có phạm vi toàn cầu 
        (tất cả mã trong tập lệnh sẽ thực thi ở chế độ nghiêm ngặt)
  ---> Được khai báo bên trong một hàm, nó có phạm vi cục bộ (chỉ mã bên trong hàm ở chế độ nghiêm ngặt)
  */
    function strictMode () {
      'use strict' //strick mode trong phạm vi hàm.
      var year = 2022  // year = 2022 --> year là biến toàn cục. cần thêm từ khóa var để tạo biến cục bộ
    }
    strictMode()
    // console.log("2. ví dụ về strick mode: " + year) //lỗi. nếu k dùng strict mode thì biến year sẽ có giá trị 2022

 /*
  3. - What are the differences between `==` and `===`? Write an example for each case (if any)?
  ---> `==` : dùng để so sánh giá trị 
  ---> `===`: dùng để so sánh giá trị, kiểu dữ liệu, vùng nhớ (ví dụ 1 object có 1 vùng nhớ riêng biệt)
  */
    var a = 5
    var b = "5"
    var c = {}
    var d = {}
    var e = 5
    console.log("3. so sánh == và ===")
    console.log( a == b)     //true 
    console.log( a === b)    //false
    console.log( a === e)    //true
    console.log( c == d)     //false
    console.log( c === d)    //false

 /*
  4. - Give a list of `Falsy` values in Javascript.
 */
    console.log("4. List falsy")
    console.log(Boolean(false))
    console.log(Boolean(0))
    console.log(Boolean(-0))
    console.log(Boolean(0n))
    console.log(Boolean(""))
    console.log(Boolean(null))
    console.log(Boolean(undefined))
    console.log(Boolean(NaN))

 /*
  /5. - Give an example for each of the following methods in Javascript
    + map
    + filter
    + reduce
    + find
    + some
  */
    //map: tạo biến mới có số cùng số lượng phân tử, và nhận giá trị array với những thay đổi mới.

    var info = [
      {
        name: "xinh",
        age: 23,
        province: "quảng trị"
      },
      {
        name: "thanh",
        age: 22,
        province: "huế"
      },
      {
        name: "trinh",
        age: 18,
        province: "huế"
      }
    ]
    console.log(info)

    var newInfo = info.map(function infoReplace (info) {
      return{
        name: `Tên: ${info.name}`,
        age: `Tuổi: ${info.age}`,
        province: info.province
      }
    })
    console.log("5.1 ví dụ: map")
    console.log(newInfo)


    //filter: tìm kiếm và trả về tất cả các phần tử thõa mãn đk. "ai ở huế?"

    var hueProvince = info.filter(function (info, index){
      return info.province == "huế"
    })
    console.log("5.2 ví dụ: filter,ai ở huế?")
    console.log(hueProvince)

    // reduce: tính toán trong mảng, tính độ tuổi trung bình.
  
    var sumAge = info.reduce(function (sum, numAge){
      return sum + numAge.age
    },0)
    var avgAge = sumAge/info.length
    console.log("5.3 ví dụ: reduce,, tính tuổi trung bình: " + avgAge)


    //find: tìm kiếm phần tử vs đk tương ứng. Đúng--> kq trả đúng phân tử đó, và thoát.

    var isHue = info.find( function (info, index){
      return info.province == "huế"
    })
    console.log("5.4 ví dụ: find,, có aj ở huế k?")
    console.log(isHue)


    //some: chỉ cần 1 phần tử thõa mãn--> true

    var over20 = info.some( function (info, index){
      return info.age > 20
    })
    console.log("5.5 ví dụ: some, có người trên 20 tuổi?")
    console.log(over20)
 
  //6. - Give an example for add a new element to an array[] (at the end)
    numArray = [1,2,3,4,5,6]
    numArray.push(10)
    console.log("6. thêm 10 vào cuối mảng: " + numArray)

  //7. - Give an example for add a new element to an array[] (at the beginning)
    numArray.unshift(20)
    console.log("7. thêm 20 vào đầu mảng: " + numArray)


  //8. - Give an example for removing an element in array[]
    numArray.splice(3,1)
    console.log("8. xóa phần tử thứ 4 của mảng: " + numArray)
  


/* ​
### Playground
1. Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.

Input: a = 5, b = 10
Output: 15

Input: a = 5, b = 5
Output: 30
*/

function sum (a, b) {
  if (a!=b) {
   return a + b
   }else {
    return (a + b) * 3
  }
}

var output11 = sum(5, 10);
console.log("output bài 1.1: a + b = " + output11);

var output12 = sum(5, 5);
console.log("output bài 1.2: a + b = " + output12);


/* 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple their absolute difference if the specified number is greater than 19.
​
Input: a = 12
Output: 7
​
Input: a = 19
Output: 0
​
Input: a = 22
Output: 9
*/

function abs19 (a) {
  if (a <= 19) {
    return 19 - a
  }else {
    return (a - 19) * 3
  }
}

var output21 = abs19(12)
console.log("output bài 2.1: |a-19| = " + output21);

var output22 = abs19(19)
console.log("output bài 2.2: |a-19| = " + output22);

var output23 = abs19(22)
console.log("output bài 2.3: |a-19|*3 = " + output23);


/* 3. A masked number is a string that consists of digits and one asterisk (*) 
that should be replaced by exactly one digit. Given a masked number find all the possible options 
to replace the asterisk with a digit to produce an integer divisible by 3.

Input: a = '1*9'
Output: ['129', '159', '189']

Input: a = '1234567890*'
Output: ['12345678900', 
 '12345678903', 
 '12345678906', 
 '12345678909']

*/
var output31 = []

function numbers1 () {
  var a = 109  //giá trị min thỏa mãn đk
  var i = (a - 9) / 10 
  for (i ; i < 19 ; i++) {
    number = 10 * i + 9
    if (number % 3 == 0) {
      output31.push(number.toString())
    }else{
      continue
    }
  }
}
numbers1('1*9')
console.log("Đây là kết quả bài 3");
console.log(output31);

// -----------

var output32 = []

function numbers2 () {
  var a = 12345678900  //giá trị min thỏa mãn đk
  for (i = 0 ; i < 10 ; ++i){
    number = a + i;
    if ((number % 3 == 0) && (a % 100 + i < 10)){
      output32.push(number.toString())
    }else {
      continue
    }
  }
}
numbers2('1234567890*')
console.log(output32);


/* 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
​
Input: a = '1*9'
Output: []
​
Input: a = '1234567890*'
Output: ['12345678900', 
 '12345678906']
*/

var output41 = []

function numbers3 () {
  var a = 109  //giá trị min thỏa mãn đk
  var i = (a - 9) / 10
  for (i ; i < 19 ; i++) {
    number = 10 * i + 9
    if (number % 6 == 0) {
      output41.push(number.toString())
    }else{
      continue
    }
  }
}
numbers3('1*9');
console.log("Đây là kết quả bài 4");
console.log(output41);

// ------------

var output42 = [];

function numbers4 () {
  var a = 12345678900  //giá trị min thỏa mãn đk
  for (i = 0 ; i < 10 ; i++){
    number = a + i;
    if ((number % 6 == 0) && (a%100 + i < 10)){
      output42.push(number.toString())
    }else {
      continue
    }
  }
}
numbers4("1234567890*")
console.log(output42);


