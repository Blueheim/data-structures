const LinkedList = require('../linked-list/LinkedList');

/**
 ** @author: Xavier <Blueheim> Deroeux
 * Data structure representing the Stack
 * Add and remove elements in LIFO manner
 * Used for example in Depth-First Search algorithms
 * @class Stack
 */
class Stack {
  /**
   *Creates an instance of Stack.
   * @constructor
   * @this {Stack}
   * @property {LinkedList} items list items of the stack
   * @memberof Stack
   */
  constructor() {
    this.items = new LinkedList();
  }

  get size() {
    return this.items.size;
  }

  /**
   * Add a new element into the stack
   * Runtime: O(1)
   * @param {any} item to add to the list
   * @returns {Stack} for method chaining
   * @memberof Stack
   */
  add(item) {
    this.items.addLast(item);
    return this;
  }

  /**
   * Remove a list element
   * Runtime: O(1)
   * @returns {any} removed list element
   * @memberof Stack
   */
  remove() {
    return this.items.removeLast();
  }
}

module.exports = Stack;
