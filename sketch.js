var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
 average()
}

function draw() 
{
  background(30);
}

 function average() {
  for(var i=0; i < weight.length; i=i+1) {
    var sum= sum+weight[i] 
     console.log(sum);
  
  }
  var average=sum/weight.length
  console.log(average);
 }

