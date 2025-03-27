//Time complexity would be N/2, but in O Notation we don't count constant factors. So the time complexity is O(n)

function isPalindrome(word) {

  let left = 0;
  let right = word.length - 1;
  let isPalindrome = false;

  while (left <= right) {

    if (word[left].toLowerCase() === word[right].toLowerCase()) {
      isPalindrome = true;
    }
    else {
      isPalindrome = false;
      break;
    }

    left++;
    right--;
  }

  return isPalindrome;

}

var word = "Mom";
var result = isPalindrome(word);

console.log(`input: ${word}`);
console.log(result);

word = "Otavio";
result = isPalindrome(word);

console.log(`input: ${word}`);
console.log(result);

