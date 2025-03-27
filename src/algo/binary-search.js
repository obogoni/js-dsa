export function find(haystack, needle) {
  let lo = 0;
  let high = haystack.length;

  do {
    let middle = Math.floor(lo + (high - lo) / 2);
    let value = haystack[middle];

    if (value === needle) {
      return middle;
    }
    else if (value > needle) {
      high = middle;
    }
    else {
      lo = middle + 1;
    }

  } while (lo < high)

  return -1;
}
