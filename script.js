function sumIntervals(intervals){
  //TODO
  let numberOfIntervals=intervals.length;
  
  //check highest negative number among all given values
  let highestNegative=0;
   for (a=0; a<numberOfIntervals; a++) {
     if (intervals[a][0]<highestNegative){highestNegative=intervals[a][0]; console.log("h",highestNegative)}
   } // end for a
  //add that highest number to all values
  if (highestNegative<0){
    
    highestNegative=highestNegative*-1;
  for (a=0; a<numberOfIntervals; a++) {
    
    intervals[a][0]=intervals[a][0]+highestNegative;
    intervals[a][1]=intervals[a][1]+highestNegative;
   
  }
  }
  
  //start summing intervals
  var arr=[];
  let d=0;
  for (a=0; a<numberOfIntervals; a++) {

    let val1=intervals[a][0];
    let val2=intervals[a][1];

    for (b=val1; b<val2; b++){
      //console.log(b)
      arr[b]=1;
    }// end for b
  } // end for a
  for (c=0; c<arr.length; c++){ if (arr[c]) {d=d+arr[c]}; }
  return d;
  
}// end function sumIntervals
