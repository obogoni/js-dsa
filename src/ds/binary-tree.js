/*The node for binary tree. 
 *Also, as it turns out: you can declare class private fields in Javascript since ES2019.
 */

export class Node {
  left = null;
  right = null;
  value;

  constructor(data) {
    this.value = data;
  }
}
