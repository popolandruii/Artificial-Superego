var q1;
var q2;
var b;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var value;

function setup() {
  createCanvas(600, 1000);
  textFont('CourierNew');
  var q1position = height * 1 / 9;
  var q1 = select('.q1');
  q1.position(width * 1 / 7, q1position);
  var q2 = select('.q2');
  q2.position(width * 1 / 7, q1position + height * 1 / 5);
  var q3 = select('.q3');
  q3.position(width * 1 / 7, q1position + height * 2 / 5);

  var b = select('.b');
  b.position(width * 2 / 3, height * 7 / 8);
}

function changeColor(){

}

function draw() {
  background(220);
  value = [i1, i2, i3];
  // fill(255);
  // circle(mouseX,mouseY,30);
}

function qreVa(i,index){
  //////
  //////active a;

}

function q1reVa1() {
  i1 = 1;
  value = [i1, i2, i3];
  console.log(value);
  document.getElementById("q1a1").className = "a active";
  document.getElementById("q1a2").className = "a";
  document.getElementById("q1a3").className = "a";
  return i1;
}

function q1reVa2() {
  i1 = 2;
  value = [i1, i2, i3];
  console.log(value);
  document.getElementById("q1a1").className = "a";
  document.getElementById("q1a2").className = "a active";
  document.getElementById("q1a3").className = "a";
  return i1;
}

function q1reVa3() {
  i1 = 3;
  value = [i1, i2, i3];
  console.log(value);
  document.getElementById("q1a1").className = "a";
  document.getElementById("q1a2").className = "a";
  document.getElementById("q1a3").className = "a active";
  
  return i1;
}
////////////////////
/////// q2
/////////////////////
function q2reVa1() {
  i2 = 1;
    value=[i1,i2,i3];
  console.log(value);

  document.getElementById("q2a1").className = "a active";
  document.getElementById("q2a2").className = "a";
  document.getElementById("q2a3").className = "a ";

  return i2;

}

function q2reVa2() {
  i2 = 2;
    value=[i1,i2,i3];
  console.log(value);
  document.getElementById("q2a2").className = "a active";
  document.getElementById("q2a1").className = "a";
  document.getElementById("q2a3").className = "a";
  return i2;
}

function q2reVa3() {
  i2 = 3;
    value=[i1,i2,i3];
  console.log(value);
  document.getElementById("q2a1").className = "a ";
  document.getElementById("q2a2").className = "a";
  document.getElementById("q2a3").className = "a active";
  return i2;
}


////////////////////
/////// q3
/////////////////////
function q3reVa1() {
  i3 = 1;
    value=[i1,i2,i3];
  console.log(value);
  document.getElementById("q3a1").className = "a active ";
  document.getElementById("q3a2").className = "a";
  document.getElementById("q3a3").className = "a ";
  return i3;
}

function q3reVa2() {
  i3 = 2;
    value=[i1,i2,i3];
  console.log(value);
  document.getElementById("q3a1").className = "a ";
  document.getElementById("q3a2").className = "a active";
  document.getElementById("q3a3").className = "a ";
  return i3;
}

function q3reVa3() {
  i3 = 3;
  console.log(value);
  document.getElementById("q3a1").className = "a ";
  document.getElementById("q3a2").className = "a ";
  document.getElementById("q3a3").className = "a active";
  return i3;
}

// style.color

function callpic(){
  // var isub = ''+ i1 +''+ i2 +''+ i3  ;
  var isub=i1.toString()+i2.toString()+i3.toString()+floor(random(1,3));
  document.getElementById("resultimg").src='./pic/'+isub+'.jpeg';
  console.log(isub);
}
