/*
 * When given two crystal balls that will break if dropped from a high enough distance, 
 * determine the exact spot in which it will break in the most optimized way. 
 * WITHOUT USING LINEAR SERACH!!! 
 * */

/**
 * Determines the exact spot where a crystal ball will break when dropped from a certain height.
 * This function optimizes the search by avoiding a linear search approach.
 * Time complexity: O(sqrt(n)) - The function uses a jump search approach, which reduces the number of checks needed.
 * @param {boolean[]} breaks - An array where each element represents a floor. 
 *                             A value of `true` indicates the ball breaks when dropped from that floor.
 *                             A value of `false` indicates the ball does not break.
 * @returns {number} The index of the first floor where the ball breaks, or -1 if no such floor exists.
 *
*/
export function timeCheck(breaks) {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;

  //Jump through the array until you find a floor where a ball breaks
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break;
    }
  }

  //Once you hit the point where the ball broke, you need to check all positions in the last jumped window to find the least high enough distance
  i -= jump;

  for (; i < breaks.length; i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
