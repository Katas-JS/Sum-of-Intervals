function sumIntervals(intervals){
  //TODO
  let numberOfIntervals=intervals.length;
  var arr=[];
  let d=0;
  for (a=0; a<numberOfIntervals; a++) {
   // console.log(intervals[a][0]);
    for (b=intervals[a][0]; b<intervals[a][1]; b++){
      //console.log(b)
      arr[b]=1;
    }// end for b
  } // end for a
  for (c=0; c<arr.length; c++){ if (arr[c]) {d=d+arr[c]}; }
  return d;
}// end function sumIntervals
