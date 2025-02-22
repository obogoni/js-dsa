//Uses the Divide and Conquer method to find the maximum value of a given array.
//The complexity here is O(log n). 
//Also, as it turns out, there's no function overloading in Javascript

function findMax(arr, left = 0, right = arr.length - 1) {

  console.log(`left: ${left} right: ${right}`);

  if (left > right) {
    return Number.MIN_VALUE;
  }

  if (left === right) {
    return arr[left];
  }

  var mid = Math.floor((left + right) / 2);

  console.log(`middle of array: ${mid}`);

  let leftHalfMax = findMax(arr, left, mid);

  console.log(`left max: ${leftHalfMax}`);

  let rightHalfMax = findMax(arr, mid + 1, right);

  console.log(`right max: ${rightHalfMax}`);

  if (leftHalfMax > rightHalfMax) {
    return leftHalfMax;
  }
  else {
    return rightHalfMax;
  }

}

var a = [4, 72, 3, 58, 0, 30, 12, 56, 92];

var result = findMax(a);

console.log(`max value: ${result}`);




