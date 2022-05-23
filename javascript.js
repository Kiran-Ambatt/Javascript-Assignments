//1
console.clear()
var n=10,sum=0;
for(var i=1;i<=n;i++)
{
  var sum=sum+i;
  console.log(sum)
}
//--------------------
//2
console.clear()
var n=10,sum=0;
for(var i=1;i<=n;i++)
{
  if(i%3===0||i%5===0)
    {
      var sum=sum+i;
      console.log(sum)
    }
  
}
//---------------------
//3
function parity(n)
{
  if(n%2===0)
    {
      console.log("even");
    }
  else
    {
            console.log("odd");
    }
}
parity(2)
//-------------------------


//5
const isLeap = year => {
   return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
const nextNLeap = n => {
   const arr = [];
  let year=prompt("plase enter the year");
   //let year = new Date().getFullYear()+1;
   while(arr.length < n){
      if(isLeap(year++)){
         arr.push(year-1);
      };
   };
   return arr;
};
console.log(nextNLeap(20));

//-------------------------------------

//7
<!DOCTYPE html>
<html>
<body>

<h2>Currency Conversion </h2>

<p>Please enter the value in dollar($):</p>

<input id="numb" placeholder="$">

<button type="button" onclick="myFunction()">Convert</button>

<p id="INR"></p>
<p id="Yen"></p>
<p id="euro"></p>
<p id="pound"></p>

<script>
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  let I,Y,E,P;
  I=x*77.59+" INR";
  Y=x*109.14+" Yen";
  E=x*0.84+" Euro";
  P=x*0.72+" Pound sterling";
  document.getElementById("INR").innerHTML = I;
  document.getElementById("Yen").innerHTML = Y;
  document.getElementById("euro").innerHTML = E;
  document.getElementById("pound").innerHTML = P;
}
</script>

</body>
</html> 
//-------------------------------
//8
function concatination()
{
  const a = ["a","b","c"];
  const b = [1,2,3];
  return a.concat(b);
}

console.log(concatination());

//-------------------------

//10
var n=100;
var n1=1,n2=1,NT;
for(var i=1;i<=n;i++)
  {
    console.log(n1);
    NT=n1+n2;
    n1=n2;
    n2=NT;
  }
//----------------------
//11
let array=[1,6,3,8,4,9,2];
var rev=new Array;
for(i=array.length-1;i>=0;i--)
  {
    rev.push(array[i]);
  }
console.log(rev);
//----------------------
//13

//using for loop
let array=[1,2,3,4,5];
var sum=0;
function forloop()
{
  for(var i=0;i<array.length;i++)
  {
    sum=sum+array[i]
  }
  return sum;
}
console.log(forloop())

//using while loop
let array=[1,2,3,4,5];
var sum=0;
var i=0;
function whileloop()
{
  while(i<array.length)
  {
    sum=sum+array[i];
    i++
  }
  return sum;
}
console.log(whileloop())


//using do while loop

let array=[1,2,3,4,5];
var sum=0;
var i=0;
function dowhile()
{
  do
    {
      sum=sum+array[i];
      i++;
    }
  while(i<array.length);
  return sum;
}
console.log(dowhile())

//--------------------------
//14
//1
let array=Array.from({length: 100}, () => Math.floor(Math.random() * 100));
var largest = array[0];

for (var i = 0; i < array.length; i++) {
    if (largest < array[i] ) {
        largest = array[i];
    }
}
console.log(largest);
console.log(array)
//2
let array=Array.from({length: 100}, () => Math.floor(Math.random() * 100));

var smallest = array[0];

for (var i = 0; i < array.length; i++) {
    if (smallest > array[i] ) {
        smallest = array[i];
    }
}
console.log(array)
console.log(smallest);
//3
var sum=0;
let array=Array.from({length: 100}, () => Math.floor(Math.random() * 100));
for(var i=0;i<array.length;i++)
  {
    sum=sum + array[i];
  }
console.log(sum);
let avg=sum/array.length;
console.log(avg);
//4
var count1=0;
var count2=0;
let array=Array.from({length: 100}, () => Math.floor(Math.random() * 100));

for(var i=0;i<array.length;i++)
  {
    if(((array[i])%(2))==0)
      {
        count1++;
      }
    else
      {
        count2++;
      }
  }
console.log(count1);
console.log(count2);
if(count1>count2)
  {
    console.log("even count is high",count1);
  }
else
  {
    console.log("odd count is high",count2);
  }
//------------------------------------
//15
function bblSort(arr){
     
 for(var i = 0; i < arr.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( arr.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(arr[j] > arr[j+1]){
         
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 return arr;
}
// This is our unsorted array
var arr = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
console.log(bblSort(arr))

//-----------------------------
//16
<!DOCTYPE html> 
<html> 
<head> 
<meta charset=utf-8 /> 
<title>Create a table</title> 
<style type="text/css"> 
body {margin: 30px;} 
</style>  
</head><body> 
<table id="myTable" border="1"> 
</table><form> 
<input type="button" onclick="createTable()" value="Create the table"> 
</form>
<script>
function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+", Column-"+c; 
    }
   }
}
</script>
</body>
</html>



//------------------------------------------------------------------------

let composedValue=(square,double, value) => square(double(value))
const square = (x) => x*x;
const double = (x) => x*2;
const result = composedValue(square, double, 5)
console.log(result);

//---------------------------------------------------------------------------------
let compose=(square,double)=>(arg)=>square(double(arg))
const square = (x) => x*x;
const double = (x) => x*2;
const f1 = compose(square, double)
const f2 = compose(double, square)
console.log(f1(5));
console.log(f2(5));
//------------------------------------------------------------------------------------------------
const isEven = (num) => (num % 2 == 0);
let arr = [10, 3, 5, 4, 2];

let find = (arr, isEven) => {
  var match = false;
  for (var i = 0; i < arr.length; i++)
  {
    if (isEven(arr[i]))
    {
      return arr[i];
    }
  }
  return match;
}
console.log('Result');
console.log(find(arr, isEven))

//----------------------------------------------------------------------------------

