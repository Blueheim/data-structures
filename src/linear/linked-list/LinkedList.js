const Node = require('../node/Node');
/**
 * @author: Xavier <Blueheim> Deroeux
 * Data structure representing the Linked List
 * Doubly: each node has a reference to the next and previous object
 * @class LinkedList
 */
class LinkedList {
  /**
   *Creates an instance of LinkedList.
   * @constructor
   * @this {LinkedList}
   * @property {Node} head head element of the list
   * @property {Node} tail tail element of the list
   * @property {number} size total number of elements in the list (keep track in a prop to avoid multiple O(n) computations)
   * @memberof LinkedList
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get length() {
    return this.size;
  }

  /**
   * Insert an element at the begining of the list
   * Runtime: O(1)
   * @param {any} value value to link to the new node
   * @returns {Node} new head node
   * @memberof LinkedList
   */
  addFirst(value) {
    const newHeadNode = new Node(value);

    if (this.head) {
      newHeadNode.next = this.head;
      this.head.previous = newHeadNode;
    } else {
      this.tail = newHeadNode;
    }

    this.head = newHeadNode;
    this.size += 1;

    return newHeadNode;
  }

  /**
   * Insert an element at the end of the list
   * By using tail reference, we don't have to loop through the list so we avoid linear runtime
   * Runtime: O(1)
   * @param {any} value value to link to the new node
   * @returns {Node} new tail node
   * @memberof LinkedList
   */
  addLast(value) {
    const newTailNode = new Node(value);

    if (this.tail) {
      newTailNode.previous = this.tail;
      this.tail.next = newTailNode;
    } else {
      this.head = newTailNode;
    }

    this.tail = newTailNode;
    this.size += 1;

    return newTailNode;
  }

  /**
   * Insert an element at a specified index
   * Runtime: O(n)
   * @param {any} value value to link to the new node
   * @param {number} [index=0] index where to insert element
   * @returns {Node} inserted node or 'null' if the index is out of bound
   * @memberof LinkedList
   */
  add(value, index = 0) {
    if (index === 0) {
      return this.addFirst(value);
    }

    if (index === this.size) {
      return this.addLast(value);
    }

    const currentNode = this.getNode(index);
    if (currentNode) {
      const newNode = new Node(value);
      newNode.previous = currentNode.previous;
      newNode.next = currentNode;

      currentNode.previous.next = newNode;
      currentNode.previous = newNode;

      this.size += 1;
      return newNode;
    }

    return null;
  }

  /**
   * Search through the list until callback function return a non null value
   * Runtime: O(n)
   * @param {function} callback evaluation function for node and index
   * @returns {any} callback function return either a non null value or 'null'
   * If a non null value is returned the search algorithm is stopped
   * @memberof LinkedList
   */
  search(callback) {
    let node = this.head;
    let position = 0;
    while (node) {
      const result = callback(node, position);
      if (result !== null) {
        return result;
      }

      position += 1;
      node = node.next;
    }
    return null;
  }

  /**
   * Retrieve the node at a specified index
   * Runtime: O(n)
   * @param {number} [index=0] index of the searched node
   * @returns {Node} searched node or 'null' if index out of bound
   * @memberof LinkedList
   */
  getNode(index = 0) {
    return this.search((node, position) => {
      if (position === index) {
        return node;
      }
      return null;
    });
  }

  /**
   * Retrieve the node index (first match) corresponding to the specified value
   * Runtime: O(n)
   * @param {any} value value to be searched with
   * @returns {number} index found or 'null' if no matching
   * @memberof LinkedList
   */
  getIndex(value) {
    return this.search((node, position) => {
      if (node.value === value) {
        return position;
      }
      return null;
    });
  }

  /**
   * Remove the first element of the list
   * Runtime: O(1)
   * @memberof LinkedList
   */
  removeFirst() {
    const currentHead = this.head;
    if (currentHead) {
      this.head = currentHead.next;
      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
      this.size -= 1;
    }

    return currentHead;
  }

  /**
   * Remove the last element of the list
   * Runtime: O(1)
   * @memberof LinkedList
   */
  removeLast() {
    const currentTail = this.tail;
    if (currentTail) {
      this.tail = currentTail.previous;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.size -= 1;
    }

    return currentTail;
  }

  /**
   * Remove the node corresponding to th specified index
   * Runtime: O(n) in worst-case scenario
   * @param {number} [index=0]
   * @returns {any} the removed node or 'null'
   * @memberof LinkedList
   */
  removeByIndex(index = 0) {
    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size - 1) {
      return this.removeLast();
    }

    const node = this.getNode(index);

    if (node) {
      node.previous.next = node.next;
      node.next.previous = node.previous;
      this.size -= 1;
      return node;
    }

    return null;
  }

  /**
   * Iterator implementation
   *
   * @memberof LinkedList
   */
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = LinkedList;
