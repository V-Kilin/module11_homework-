import { repeatWord } from './index.js';

describe('tests for function repeatWord', () => {
   it('add the word 3 times ', () => {
      expect(repeatWord('Hi', 3)).toBe('HiHiHi')
   }),
      it('add the word 2 times', () => {
         expect(repeatWord('Hi', 4)).toBe('HiHi')
      }),
      it('add the word 0 times', () => {
         expect(repeatWord('Hi', 0)).toBe('')
      })
});

// C использованием одного it

describe('tests for function repeatWord', () => {
   it('get a set of function repeatWord checks', () => {
      expect(repeatWord('A', 3)).toBe('AAA');
      expect(repeatWord('A', 4)).toBe('AAAA');
      expect(repeatWord('A', 0)).toBe('');
   });
});