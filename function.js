window.function = function (num1, num2, num3, num4, num5,num6) {

  let n1 = num1.value ?? 0;
  let n2 = num2.value ?? 0;
  let n3 = num3.value ?? 0;
  let n4 = num4.value ?? 0;
  let n5 = num5.value ?? 0;
  let n6 = num6.value ?? 0;
  var revshare;
  
  revshare=n1*((n2>0)?n3:1)/(n4*n5);
  var finalrevshare=revshare*n6*100;
  
  
  
  return finalrevshare;
}