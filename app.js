// Chp=21-25

// q1
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName +" "+ lastName;
// alert("Hello " +fullName+ " !")

// q2
// var mobile = prompt("Enter your favorite mobile phone model");
// document.write("My favorite phone is : ", mobile, "<br>")
// document.write("Length of String : ", mobile.length)

// q3
// var str = "Pakistani"
// document.write("String: ", str, "<br>")
// for (var i=0 ; i<str.length; i++){
//     if (str[i]==="n"){
//         document.write("Index of 'n': ", i)
//     }
// }

// q4
// var str = "Hello World";
// document.write("String: ", str, "<br>")
// var index = -1;
// for (var i=0; i<str.length; i++){
//     if (str[i]==="l"){
//         index = i
//     }
// }
// document.write("Last index of 'l': ", index)

// q5
// var str ="Pakistani";
// document.write("String: ", str, "<br>")
// for (var i=0; i<str.length; i++){
//     if (i === 3){
//         document.write("Character at index 3: ", str[i])
//     }
// }

// q6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("Hello ", fullName)

// q7
// var str = "Hyderabad";
// document.write("String: ",str,"<br>")
// var s = "Islam" + str.slice(5,);
// document.write("After replacement: ",s)

// q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var find ="and";
// res="";
// for (var i=0; i<message.length; i++){
//     message= message.replace("and", "&")

// }
// document.write(message)

// q9
// var str ="472";
// var a = str*1;
// document.write("Value: ",str, "<br>")
// document.write("Type: ", typeof str, "<br>")
// document.write("Value: ",a, "<br>")
// document.write("Type: ", typeof a)

// q10
// var str =prompt("Enter any string");
// var upper= str.toUpperCase()
// document.write(upper)

// q11
// var str =prompt("Enter any string");
// var a = str.slice(0,1);
// var b = str.slice(1,);
// var upper = a.toUpperCase()
// var full = upper + b;
// document.write(full)

// q12
// var num = 35.36 ;
// document.write("Number: ", num, "<br>")
// var a = ""+ num;
// var c = a.replace(".","");
// document.write("Result: ",c)

// q13
// var username = prompt("Enter username");
// for (var i=0; i<username.length; i++){
//     if (username[i]==="@"){
//         var a= prompt("Please enter a valid username")
//     }
//     else if (username[i]==="."){
//         var a= prompt("Please enter a valid username")
//     }
//     else if (username[i]===","){
//         var a= prompt("Please enter a valid username")
//     }
//     else if (username[i]==="!"){
//         var a= prompt("Please enter a valid username")
//     }
// }
// document.write(a)

// q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === b) {
//         document.write(b, " is available at index ", i, " in our bakery")
//         break;
//     }
//     else {
//         document.write("We are sorry. ", b, " is not available in our bakery")
//     }
//     break;
// }

// q15



// q16

// var university = "University of Karachi";
// var array = university.split("");
// for (var i=0; i<array.length;i++){
//     document.write(array[i], "<br>")
// }

// q17
// var str =prompt("Enter input");
// document.write("User input: ", str, "<br>")
// var a= str[str.length-1];
// document.write("Last character of input: ", a)

// q18
// var str= "The quick brown fox jumps over the lazy dog";
// document.write("Text: ", str, "<br>")
// var a =str.toLowerCase()
// var res=0
// var find = "the";
// for (var i=0; i<a.length;i++){
//     if (a.slice(i,i+find.length)== find){
//         res=res + 1;
        
//     }
// }
// document.write("There are ", res, " occurence(s) of word 'the'")


//CHAPTER 26-30
//QUESTION:1
//var a=+prompt("Enter positive integer:");
// document.write("Number:",a+"<br>");
// var c=Math.round(a);
// document.write("Round off value:",c +"<br>");
// var d=Math.floor(a);
// document.write("floor value:",d +"<br>");
// var e=Math.ceil(a);
// document.write("Ceil value:",e +"<br>");


//QUESTION:2
// var a=+prompt("Enter negative floating point number: ");
// document.write("Number:",a+"<br>");
// var c=Math.round(a);
// document.write("Round off value:",c +"<br>");
// var d=Math.floor(a);
// document.write("floor value:",d +"<br>");
// var e=Math.ceil(a);
// document.write("Ceil value:",e +"<br>");

//QUESTION:3
// var a=-4;
// var c=Math.abs(a);
// document.write("The absolute value of ",a," is ",c);

//QUESTION:4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value: ' + diceRoll);

//QUESTION:5
// var rNum = Math.floor( Math.random() * 2 ) +1;
// document.write(rNum+"<br>");
// if(rNum===1){
//      document.write("Random coin value: Tails");
// }
// else{
//     document.write("Random coin value: Heads");
// }

//QUESTION:6
// var rNum = Math.floor( Math.random() * 100 ) +1;
// document.write("Random number b/w 1 and 100: " ,rNum);

//QUESTION:7
// var a=prompt("Enter your weight in kilograms:");
// var b=parseFloat(a);
// document.write('"The weight of user is ",b,"kilograms");

//QUESTION:8
// var secNum=Math.floor( Math.random() * 10 ) +1;
// var userI=+prompt("Enter a number between 1 and 10:");
// if(userI===secNum){
//     alert("Congrats!");
// }
// else{
//     alert("Try again");
// }





//CHAPTER 31-34

//Q1
// var date = new Date()
// document.write(date)

//Q2
// var a = ["January","February","March","April","May","June","July","August","september","october","november","december"]
// var now = new Date();
// var month = now.getMonth();
// var nameOfMonth = a[month];
// document.write("Current Month: "+nameOfMonth)

//Q3
// var a=new Date();
// var c = a.toString();
// var b = c.slice(0,3);
// document.write(b)

//Q4
// var day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var to = new Date();
// var dayy = to.getDay();
// var name = day[dayy];
// document.write(name)
// if (name==="saturday" || name==="sunday") {
//     document.write("It's Fun Day")
// }

//Q5
// var a = new Date();
// var dtoday = a.getDate(); 
// if (dtoday < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last fifteen days of the month")
// }

// //Q6
// var time = new Date();
// var ms = time.getTime();
// var mins = ms/60000;
// document.write("Current Time: "+time + "<br>"+"Elapsed milliseconds since January 1,1970: " + ms +
// "<br>" + "elapsed minutes since January1,1970 "+ mins)

//Q7
// var a = new Date();
// var time = a.getHours();
// if (time < 12) {
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }

//Q8
// var laterDate = new Date( "December 31, 2020 00:00:00");
// document.write(laterDate)
            //OR
// var a = new Date();
// n=a.setHours(0,0,0)
// z=new Date(a.setFullYear(2020,11,31))
// document.write(z)

//Q9
// var ramadan = new Date("April 26,2020");
// var now = new Date();
// var day = now.getTime()-ramadan.getTime();
// var days = Math.floor(day/(1000*60*60*24));
// document.write(days," days have passed since first Ramadan April 26,2020.")

//Q10
// var ref = new Date("2020,5,20");
// var reff= ref.getTime();
// var date = new Date();
// var get = date.getTime();
// var diff = (get - reff)/1000;
// document.write("Reference Date: ",date,"<br>"," ", diff, " seconds have passed since the beginning of 2020")

//Q11
// var a = new Date();
// var hour1 = a.setHours(6,38,30);
// var hour2 = new Date()
// var b = hour2.setHours(7,38,30);
// document.write("Current Date: ",a,"<br>","1 hour ago it was ",hour2)

// Q12:
// var d = new Date();
// document.write("Current date : " + d + "<br>" + "<br>");
// var a = d.getFullYear();
// var a = a - 100;
// d.setFullYear(a);
// document.write("100 years back, it was : " + d);

//Q13
// var age = 19;
// var a = new Date();
// var year = a.getFullYear();
// var birthYear = year - age;
// document.write("my age is: ",age,"<br>","my birth year is: ",birthYear)

// Q14:
// var numOfUnits = 500;
// var chargesPerUnit = 18.83;
// var latePayment = 500;
// var netAmount = numOfUnits * chargesPerUnit;
// var grossAmount = netAmount + latePayment;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>Zubia Naeem</b> </br>");
// document.write("Month: <b>June</b> </br>");
// document.write("Number of units: <b>" + numOfUnits + "</b> </br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b></br>");
// document.write("Late Payment Surcharge: <b>" + latePayment + "</b> </br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></br>");


//Chap 34-38 

// QUESTION NO. 1 : 

// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }

// tellTime();
// QUESTION NO. 2 :

// function name(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write("Hello " + firstName + " " + lastName + "!");
// }

// name();
// QUESTION NO. 3 :


// function add(){
//     var num1 = Number(prompt("Enter first number"));
//     var num2 = Number(prompt("Enter second number"));
//     var sum = num1 + num2 ;
//     return sum;
// }

// var a = add();
// document.write("The sum of the two numbers is " + a);
// QUESTION NO. 4 :

// function Calculator(num1,num2,operator){
//     var result = 0;
//     switch(operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             alert("You have entered an invalid operator");
//     }
//     return result;
// }

// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter operation to be performed on both numbers e.g +,-,*,/");
// var num2 = +prompt("Enter second number");

// var result = Calculator(num1,num…
// QUESTION NO. 5 :

// function square(x){
//     var squareOfNum = Math.pow(x , 2)
//     return squareOfNum;
// }

// var anyNum = +prompt("Enter a number");
// var b = square(anyNum);
// document.write("Square of " + anyNum + " is " + b);
// QUESTION NO. 6

// function factorial(n){
//     var result = 1;
//     for(var i = 2; i <= n; i++){
//         result = result * i ;
//     }
//     return result;
// }

// var number = +prompt("Enter any +ve number");
// var factorialOfNumber = factorial(number);
// document.write(factorialOfNumber);
// QUESTION NO. 7:

// function counting(start,end){
//     if(start < end){
//         for(var i = start; i <= end ; i++){
//         document.write(i + "<br>");
//         }
//     }
//     else{
//         for(var i = end; i <= start ; i++){
//             document.write(i + "<br>");
//         }
//     }
// }

// var num1 = +prompt("Enter start number");
// var num2 = +prompt("Enter end number");
// counting(num1, num2);
// QUESTION NO. 8:

// function calculateHypotenuse(base, perp){

//     var base = calculateSquare(base);
//     var perp = calculateSquare(perp);
//     var hyp = Math.sqrt(base + perp);
//     return hyp;

//     function calculateSquare(num){
//         var sq = num * num;
//         return sq;
//     }
// }

// var x = +prompt("Enter value of Base");
// var y = +prompt("Enter value of Perpendicular");
// var ans = calculateHypotenuse(x,y);
// document.write("Base is " + x + "<br>");
// document.write("Perpendicular is " + y + "<br>");
// document.write("Hypotenuse is " + ans);
// QUESTION NO. 9:

//// i)
// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var a = areaOfRectangle(10,10);
// document.write("Area of the rectangle is: " + a + "<br>");

///// ii)
// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var width = +prompt("Enter width of the rectangle");
// var height = +prompt("Enter height of the rectangle");
// var a = areaOfRectangle(width,height);
// document.write("Area of the rectangle is: " + a);
// QUESTION NO. 10:

// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// var str = prompt("Enter any string");
// var a = palindrome(str);
// if(a === true){
//     document.write(str + " is a palindrome word.");
// }
// else{
//     document.write(str + " is not a palindrome word.");
// }
// QUESTION NO. 11:

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var str = prompt("Enter any string in lower case");
// document.write(uppercase(str));
// QUESTION NO. 12:

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var str = prompt("Enter any sentence");
// document.write("<br>")
// document.write(longestWord(str));
// QUESTION NO. 13:

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));
// QUESTION NO. 14:

// function calcCircumference(radius) {
//     var c = 2 * Math.PI * radius;
//     document.write("The radius is " + radius + ". ");
//     document.write("The circumfrence is " + c + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var a = Math.PI * (radius * radius);
//     document.write("The radius is " + radius + ". ");
//     document.write("The area is " + a + ".");
//   }
  
//   calcCircumference(10);
//   calcArea(10);

