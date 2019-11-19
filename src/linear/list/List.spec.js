const List = require('./List');

describe('List', () => {
  let list;

  beforeEach(() => {
    const items = [2, 6, 10, 5];
    list = new List(items);
  });

  describe('Getting elements', () => {
    it('should return the last list item value if no index provided', () => {
      expect(list.getValue()).toEqual(5);
    });

    it('should return the list item value given a specific index', () => {
      expect(list.getValue(1)).toEqual(6);
    });

    it('should return the list item index given a specific value', () => {
      expect(list.getIndex(6)).toEqual(1);
    });
  });

  describe('Adding elements', () => {
    it('should insert an item at the beginning of the list', () => {
      list.addFirst(22);
      expect(list.getValue(0)).toEqual(22);
    });

    it('should insert an item at the middle of the list', () => {
      list.add(3, 17);
      expect(list.getValue(3)).toEqual(17);
    });

    it('should insert an item at the end of the list', () => {
      list.addLast(34);
      expect(list.getValue()).toEqual(34);
    });
  });

  describe('Replace elements', () => {
    it('should replace an item at the specified index', () => {
      list.replace(1, 90);
      expect(list.getValue(1)).toEqual(90);
    });
  });

  describe('Removing elements', () => {
    it('should remove an item at the beginning of the list', () => {
      list.removeFirst();
      expect(list.getValue(0)).toEqual(6);
    });

    it('should remove an item at the middle of the list', () => {
      list.remove(2);
      expect(list.getValue(2)).toEqual(5);
    });

    it('should remove an item at the middle of the list', () => {
      list.removeLast();
      expect(list.getValue()).toEqual(10);
    });
  });

  describe('Looping', () => {
    it('should loop through items', () => {
      const iList = [...list];
      expect(iList[0]).toEqual(2);
    });
  });
});
