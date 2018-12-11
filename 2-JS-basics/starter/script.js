/************** general idea of variable ***************/
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
console.log(firstName + lastName)

var fullAge = true;
console.log(fullAge)

var job;
console.log(job);
job = 'teacher';
console.log(job);

// Variable errors
// var _3years = 3
// var function = 5
// var 6mix = 'hello'

/**************** type coercion  *******************/
// (convert type from one to another automatically)
var firstName = 'john';
var age = 28
console.log(firstName + ' ' + age); // => john 28

var job, isMarried; // cleaner to define variable first then put value after
job  = 'teacher';
isMarried = false
console.log(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? ' + isMarried);

/**************** variable mutation *******************/
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' years old '
                + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName)

/**************** Basic operators ********************/
var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33
// math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn)
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder); //=> boolean
console.log(typeof x);  //=> undefined

/**************** Operator precedence ********************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

 // multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge) // true

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assingments
var x,y;
x = y = (3 + 5) * 4 - 6; // = moves right to left
console.log(x, y);

// more operators
x *= 2;
console.log(x);

x += 1;
x++;

x -= 1;
x--;

/**************** coding challenge 1 ********************/
var massMark = 78
var massJohn = 165;
var heightMark = 1.81
var heightJohn = 1.7;

var bmiMark = massMark / (heightMark * 2);
var bmiJohn = massJohn / (heightJohn * 2);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log("mark\'s bmi is higher than jone\'s bmi");
} else {
  console.log("mark\'s bmi is not higher than jone\'s bmi");
};

/**************** If / else statements ********************/
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + " is married.");
} else {
  console.log(firstName + " is not married.");
};

var isMarried = true;

if (isMarried) {
  console.log(firstName + " is married.");
} else {
  console.log(firstName + " is not married.");
};

/**************** boolean logic ********************/
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
}
else {
  console.log(firstName + ' is a man.');
}



























/****************  ********************/
/****************  ********************/
/****************  ********************/
/****************  ********************/
/****************  ********************/
/****************  ********************/
































