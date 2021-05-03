# Sum-of-Intervals

Here I simply iterated trhough each pair from interval start to interval end, then I added a value 1 to an empty array at the index position of the interval.  At the end I just iterated from 0 to te end of the array and added all the values together and returned the number.

But in order to deal with negative numbers I first checked every value and added the lowest negative number to a value.  Then I multiply this number by -1 to make it positive.  Finally I iterate through the arrays again and add the new value to all numbers.

https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript


Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    var test1 = [[1,5]];
    var test2 = [[1,5],[6,10]];
    Test.assertEquals(sumIntervals(test1), 4);
    Test.assertEquals(sumIntervals(test2), 8);
  });
  
  it('should return the correct sum for overlapping intervals', function(){
    var test1 = [[1,5],[1,5]];
    var test2 = [[1,4],[7, 10],[3, 5]];
    Test.assertEquals(sumIntervals(test1), 4);
    Test.assertEquals(sumIntervals(test2), 7);
  });
});
