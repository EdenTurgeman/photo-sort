describe('module', () => {
  const module = require('../src');

  describe('exports', () => {
    it('should expose a default function', () => {
      expect(typeof module.default).toBe('function');
    });
  });
});