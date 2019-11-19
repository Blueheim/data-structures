const Stack = require('./Stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('Add', () => {
    it('should add a new item in the stack', () => {
      stack.add('Country');
      expect(stack.size).toBe(1);
    });
  });

  describe('Remove', () => {
    it('should remove the last added item', () => {
      stack.add('Country');
      stack.add('Age');
      stack.add('Sex');

      const item = stack.remove();

      expect(item.value).toBe('Sex');
    });
  });
});
