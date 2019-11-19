/**
 * @author: Xavier <Blueheim> Deroeux
 *  Data structure representing the basic list (array)
 *
 * @class List
 */
class List {
  /**
   *Creates an instance of List.
   * @constructor
   * @this {List}
   * @param {Array<Any>} [items=[]]
   * @memberof List
   */
  constructor(items = []) {
    this.items = items;
  }

  get $items() {
    return this.items;
  }

  get length() {
    return this.items.length;
  }

  /**
   * Get the element value at the specified index
   * Runtime: O(1)
   * @param {number} index index of the element to return
   * @returns item at the specified index (last item by default)
   * @memberof List
   */
  getValue(index = this.length - 1) {
    return this.items[index];
  }

  /**
   * Search by value
   * Could loop through the whole list
   * Runtime: O(n)
   * @param {*} value
   * @memberof List
   */
  getIndex(value) {
    return this.items.findIndex(item => item === value);
  }

  /**
   * Insert an element at the begining of the list
   * Push every element to the right
   * Runtime: O(1)
   * @param {any} item element to insert
   * @memberof List
   */
  addFirst(item) {
    this.items.unshift(item);
  }

  /**
   * Insert an element at the middle of the list
   * Move some elements but not all
   * Runtime: O(n)
   * @param {Number} index index where to insert element
   * @param {any} item element to insert
   * @memberof List
   */
  add(index, item) {
    this.items.splice(index, 0, item);
  }

  /**
   * Insert an element at the end of the list
   * Push new value at the end of the list
   * Runtime: O(1)
   * @param {any} item element to insert
   * @memberof List
   */
  addLast(item) {
    this.items.push(item);
  }

  /**
   * Replace an existing element
   * Update element anywhere in the list
   * Runtime: O(1)
   * @param {Number} index index of the element to replace
   * @param {*} item element to update with
   * @memberof List
   */
  replace(index, item) {
    this.items[index] = item;
  }

  /**
   * Remove first element of the list
   * Change every index
   * Runtime: O(n)
   * @memberof List
   */
  removeFirst() {
    this.items.shift();
  }

  /**
   * Delete an element from the middle
   * Change indexes of impacted elements by moving back one position
   * Runtime: O(n)
   * @param {Number} index index of the element to delete
   * @memberof List
   */
  remove(index) {
    this.items.splice(index, 1);
  }

  /**
   * Delete the last element of the list
   * Runtime: O(1)
   * @memberof List
   */
  removeLast() {
    this.items.pop();
  }

  *[Symbol.iterator]() {
    const it = this.items[Symbol.iterator]();
    yield it.next().value;
  }
}

module.exports = List;
