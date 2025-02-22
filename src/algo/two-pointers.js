
//Check if array contains any pair of values where their sum is equal to the target value
//Also, as it turns out, you can't use 'let' to declare variables on a global scope in Javascript
function twoSum(arr, target) {

  arr.sort((a, b) => a - b);

  var left = 0;
  var right = arr.length - 1;

  while (left < right) {

    var sum = arr[left] + arr[right];

    if (sum > target) {
      right--;
    }
    else if (sum < target) {
      left++;
    }
    else {
      return true;
    }

  }

  return false;
}

//Test cases

var arr = [5, 2, 4, 3, 1];
var target = 3;

console.log(`arr: ${arr}`);
console.log(`target: ${target}`);

var result = twoSum(arr, target);

console.log(result);

target = 10;

console.log(`arr: ${arr}`);
console.log(`target: ${target}`);

result = twoSum(arr, target);

console.log(result);
