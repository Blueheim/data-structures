/**
 * Node referencing previous and next element
 *
 * @class Node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

module.exports = Node;
