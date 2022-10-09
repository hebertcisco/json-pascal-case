import { TransformArrayOf } from '../../helpers/transform-array';
import { MockTransformArrayOf } from '../../shared/mocks/helpers/transform-array.mock';

describe('TransformArrayOf', () => {
  let transformArrayOf: TransformArrayOf;
  beforeAll(() => {
    transformArrayOf = new MockTransformArrayOf();
  });
  describe('objects', () => {
    it('should return an array of objects', () => {
      const array = [
        {
          test: 'test',
          test2: 'test2',
        },
        {
          test: 'test',
          test2: 'test2',
        },
      ];
      const result = transformArrayOf.objects(array);
      expect(result).toEqual([
        {
          Test: 'test',
          Test2: 'test2',
        },
        {
          Test: 'test',
          Test2: 'test2',
        },
      ]);
    });
  });
  describe('strings', () => {
    it('should return an array of strings', () => {
      const array = ['test', 'test2'];
      const result = transformArrayOf.strings(array);
      expect(result).toEqual(['Test', 'Test2']);
    });
  });
});
