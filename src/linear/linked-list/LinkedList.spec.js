const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('AddFirst()', () => {
    it('should insert a node at the begining of the list', () => {
      linkedList.addFirst('First');
      expect(linkedList.head.value).toBe('First');
      expect(linkedList.tail.value).toBe('First');
    });

    it('should link the nodes when multiple first insert', () => {
      linkedList.addFirst('One');
      linkedList.addFirst('Two');

      expect(linkedList.head.next.value).toBe('One');
    });
  });

  describe('AddLast()', () => {
    it('should insert a node at the end of the list', () => {
      linkedList.addLast('Last');
      expect(linkedList.head.value).toBe('Last');
      expect(linkedList.tail.value).toBe('Last');
    });

    it('should link the nodes when multiple last insert', () => {
      linkedList.addLast('One');
      linkedList.addLast('Two');

      expect(linkedList.tail.previous.value).toBe('One');
    });
  });

  describe('Size property after adding', () => {
    it('should update size property automatically after adding a node', () => {
      linkedList.addFirst('One');

      expect(linkedList.size).toBe(1);
    });
  });

  describe('GetNode()', () => {
    it('should retrieve the first node if no index specified', () => {
      linkedList.addFirst('First');
      const head = linkedList.getNode();

      expect(head.value).toBe('First');
    });

    it('should retrieve the node at the specified existing node index', () => {
      linkedList.addFirst('One');
      linkedList.addFirst('Two');
      linkedList.addFirst('Three');

      const node = linkedList.getNode(1);

      expect(node.value).toBe('Two');
    });

    it('should return `null` if specified index is out of bound', () => {
      linkedList.addFirst('One');
      linkedList.addFirst('Two');
      linkedList.addFirst('Three');

      const node = linkedList.getNode(4);

      expect(node).toBeNull();
    });
  });

  describe('Add()', () => {
    it('should add a node at index 0 if no index specified', () => {
      linkedList.add('First');

      expect(linkedList.head.value).toBe('First');
    });

    it('should add a last node if index equal to list size', () => {
      linkedList.add('First');
      linkedList.add('Last', 1);

      expect(linkedList.tail.value).toBe('Last');
    });

    it('should add a node at the specified index', () => {
      linkedList.add('First');
      linkedList.add('Last', 1);
      linkedList.add('Middle', 1);

      const middleNode = linkedList.getNode(1);

      expect(middleNode.value).toBe('Middle');
    });

    it('should return `null` if index is out of bound', () => {
      linkedList.add('First');
      linkedList.add('Last', 1);
      linkedList.add('Middle', 1);

      const middleNode = linkedList.getNode(1);

      expect(middleNode.value).toBe('Middle');
    });
  });

  describe('GetIndex()', () => {
    it('should return the index of the first node matching a specified value', () => {
      linkedList.add('japan');
      linkedList.add('japan');

      const index = linkedList.getIndex('japan');

      expect(index).toBe(0);
    });

    it('should return null when no value matching', () => {
      linkedList.add('japan');
      linkedList.add('france');

      const index = linkedList.getIndex('germany');

      expect(index).toBeNull();
    });
  });

  // TODO: improve tests
  describe('RemoveFirst()', () => {
    it('should remove the head node of the list', () => {
      linkedList.addFirst('First');
      linkedList.removeFirst();

      expect(linkedList.length).toBe(0);
    });
  });

  // TODO: improve tests
  describe('RemoveLast()', () => {
    it('should remove the tail node of the list', () => {
      linkedList.addLast('Last');
      linkedList.removeLast();

      expect(linkedList.length).toBe(0);
    });
  });

  describe('RemoveByIndex()', () => {
    it('should remove the node at the specified index', () => {
      linkedList.add('One');
      linkedList.add('Two');
      linkedList.add('Three');

      const node = linkedList.removeByIndex(1);

      expect(node.value).toBe('Two');
    });
  });
});
