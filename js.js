function myfun() {
  document.getElementById("demo").innerHTML = "Here i am";
}

function toCelsius(F) {
  return (5 / 9) * (F - 32);
}
function displayDate() {
  document.getElementById("time").innerHTML = Date();
}

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  fruits.reverse();
  console.log(fruits);

  const points = [5, 4, 3, 2, 1, 0];
  //points.sort(function (a,b) {return a-b})
  points.sort(function (a, b) {
    return a - b;
  }); //compare function
  console.log(points);

  points.sort(function (a, b) {
    return 0.5 - Math.random();
  }); // sroting numeric array in random order
  console.log(points);

  //find the max and min element in numeric array
  console.log(Math.max.apply(null, points)); //Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)
  console.log(Math.min.apply(null, points));

  //sorting object
  const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];
  cars.sort(function (a, b) {
    return a.year - b.year;
  }); //sort by year
  console.log(cars);
}

//Array iteration
{
  //forEach() call function once for each array element
  numbers = [45, 4, 9, 16, 25];
  numbers.forEach(print);
  function print(value, index, array) {
    //it can use these three arguments
    console.log(value);
  }

  //map() create a new array by performing a function on each element
  numbers = [45, 4, 9, 16, 25];
  numbers2 = numbers.map(timesTwo);
  function timesTwo(value, index, array) {
    return value * 2;
  }
  console.log(numbers); //original one remain unchanged
  console.log(numbers2);

  //filter() creates a new array with element passes a test
  numbers = [45, 4, 9, 16, 25];
  over18 = numbers.filter(adult);
  function adult(value) {
    return value > 18;
  }
  console.log(over18);

  //reduce () runs a function on each array element to produce a single value, it will leave the original array untouched
  numbers = [45, 4, 9, 16, 25];
  sum = numbers.reduce(sumUp);

  function sumUp(total, value) {
    //total is the built in argument, (the initial value / previously returned value)
    return total + value;
  }
  console.log(sum);

  //the reduce() method can accept an initial value:
  sum = numbers.reduce(sumUp, 100);
  console.log(sum);

  //every() check if all array values pass a test, return boolean
  numbers = [45, 4, 9, 16, 25];
  over18 = numbers.every(adult);
  function adult(value) {
    return value > 18;
  }
  console.log(over18); //return a boolean

  //some() check if some array pass a test, reutrn boolean as well
  numbers = [45, 4, 9, 16, 25];
  over18 = numbers.some(adult);
  function adult(value) {
    return value > 18;
  }
  console.log(over18); //return a boolean

  //indexOf() search an array for an element value and returns its position
  fruits = ["Apple", "Orange", "Apple", "Mango"];
  position = fruits.indexOf("Orange");
  console.log(position);

  //lastIndexOf()
  fruits = ["Apple", "Orange", "Apple", "Mango"];
  position = fruits.lastIndexOf("Apple");
  console.log(position);

  //find() returns the value of the first array element that passes a test function
  numbers = [4, 9, 16, 25, 29];
  first = numbers.find(adult);
  function adult(value) {
    return value > 18;
  }
  console.log(first);

  //findIndex() return the index of the first array element that passes a test function
  numbers = [4, 9, 16, 25, 29];
  first = numbers.findIndex(adult);
  function adult(value) {
    return value > 18;
  }
  console.log(first);

  //Array.from() return an array object from any object with a length property or any iterable object
  myArr = Array.from("abdfgbg123456");
  console.log(myArr);

  //keys() reurns an array iterator object with the keys of an array
  fruits = ["Banana", "Orange", "Apple", "Mango"];
  x = fruits.keys();
  console.log(x);

  //entries() The entries() method returns an Array Iterator object with key/value pairs:
  fruits = ["Banana", "Orange", "Apple", "Mango"];
  x = fruits.entries();
  console.log(x);

  //includes() check whether a element is exsiting in the array
  fruits = ["Banana", "Orange", "Apple", "Mango"];
  x = fruits.includes("Mango");
  console.log(x);
}

//date
{
  //ne Date(year,,month...) creates a new date object with a specified date and time
  d = new Date(2018, 11, 24, 10, 33, 30, 0); //note month is from 0 to 11
  console.log(d);
  d = new Date(2018, 11, 24, 10, 33, 30);
  console.log(d);
  d = new Date(2018, 11, 24, 10, 33);
  console.log(d);
  d = new Date(2018, 11, 24, 10);
  console.log(d);
  d = new Date(2018, 11, 24);
  console.log(d);
  d = new Date(2018, 11);
  console.log(d);
  d = new Date(96, 5, 21); //use 9x for 19xx
  console.log(d);

  d = new Date("October 13, 2014 11:13:00");
  console.log(d);
  d = new Date(100000000000); // unit is in milliseconds
  console.log(d);
  d = new Date("2022-05-31");
  console.log(d);
  d = new Date("Mar 25 2015");
  console.log(d);

  x = d.toString();
  console.log(x);
  x = d.toUTCString();
  console.log(x);
  x = d.toDateString();
  console.log(x);
  x = d.toISOString();
  console.log(x);

  //convert date into millisecond from 1970/1/1
  mses = Date.parse("mar 21 2012");
  console.log(mses);

  //get method
  d = new Date("October 13, 2014 11:13:00");
  console.log(d.getFullYear());
  console.log(d.getMonth());
  console.log(d.getDate());
  console.log(d.getHours());
  console.log(d.getMinutes());
  console.log(d.getSeconds());
  console.log(d.getTime()); //ms since 1970-1-1
  console.log(d.getDay());
  console.log(Date.now());

  //set method
  d = new Date();
  d.setDate(1);
  d.setFullYear(2022);
  d.setHours(15);
  d.setMilliseconds(100);
  d.setMinutes(12);
  d.setMonth(5);
  d.setSeconds(1);
  console.log(d);
}

//random
{
  console.log(Math.random()); //random number between0 and 1
  console.log(getRndInteger(50, 40));
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

//conditional Operator
{
  a = 10;
  b = a > 10 ? "a bigger than 10" : "a is less and equal to 10";
  console.log(b);
}

//if else loop
{
  time = new Date("2022-06-01 15:31:00");
  hour = time.getHours();
  if (hour >= 6 && hour <= 12) {
    console.log("morning");
  } else if (hour > 12 && hour < 18) {
    console.log("afternoon");
  } else {
    console.log("night");
  }
}

//switch
{
  time = new Date("2022-06-04 15:31:00");
  day = time.getDay();
  switch (day) {
    case 6:
      console.log("this is Saturday");
      break;
    case 7:
      console.log("this is Sunday");
      break;
    default:
      console.log("boring weekdays");
  }
}

//for loop
{
  //for
  cars = ["BMW", "Volvo", "Saab", "Ford"];
  (i = 0), (text = "");
  for (; i < cars.length; i++) {
    text += cars[i] + "\n";
  }
  console.log(text);

  //for in
  cars = ["BMW", "Volvo", "Saab", "Ford"];
  text = "";
  for (i in cars) {
    text += cars[i] + "\n";
  }
  console.log(text);

  //for of
  cars = ["BMW", "Volvo", "Saab", "Ford"];
  text = "";
  for (i of cars) {
    text += i + "\n";
  }
  console.log(text);
}

//while loop
{
  //while
  i = 0;
  while (i < 10) {
    console.log(`the number is ${i}`);
    i++;
  }
}

//continue break
{
  //break
  i = 0;
  while (i < 10) {
    if (i == 3) {
      break;
    }
    console.log(`the number is ${i}`);
    i++;
  }

  //continue
  i = 0;
  while (i < 10) {
    if (i == 3) {
      i++;
      continue;
    }
    console.log(`the number is ${i}`);
    i++;
  }
}

//set collection of unique value
{
  letters = new Set(["a", "b", "c"]); //create new set
  console.log(letters);
  letters.add("d"); //add one new element
  console.log(letters);
  letters.delete("d");
  console.log(letters);
  console.log(letters.has("a"));
  console.log(letters.values("a"));
  console.log(letters.size);

  letters.forEach(fun);
  function fun(value) {
    console.log(value);
  }
}

//map holds key-value pairs where the keys can be any datatype;
//a map remembers the orignal insertion order of the keys
{
  fruits = new Map([
    ["apple", 500],
    ["banana", 300],
    ["oranges", 200],
  ]);
  console.log(fruits);

  fruits.set("apple", 600);
  console.log(fruits);
  fruits.set("watermelon", 700);
  console.log(fruits); //set method can modidy and add new array

  console.log(fruits.get("apple")); // get method gets the value of a key in a map

  console.log(fruits.size); //give you the size

  fruits.delete("apple");
  console.log(fruits); //delete one element

  console.log(fruits.has("banana")); //has method

  fruits.forEach(fun);
  function fun(value, key) {
    console.log(key, "=", value); //forEach()
  }
  for (x of fruits.entries()) {//entries() return an iterator object with [key,values] in Map
    console.log(x);
  }
}

//type conversion
{
  //convert string to number
  a="1";
  b="3.13"
  console.log(typeof Number(a))//Number()
  console.log(typeof +a)//Unary + operator
  console.log(typeof parseFloat(b),parseFloat(b))//convert sting to float
  console.log(typeof parseInt(b),parseInt(b))//convert string to int
  
  //convert number to string
  a=1
  console.log(typeof String(a))//String()
  console.log(typeof a.toString(),a)//.toString()

  //convert date to number
  d=new Date()
  console.log(d)
  console.log(Number(d))//Number()
  console.log(d.getTime())//.getTimes()

  //convert date to string
  d=new Date()
  console.log(d)
  console.log(typeof String(d), String(d))//String()
  console.log(typeof d.toString(),d.toString())//.toString()

  

}
