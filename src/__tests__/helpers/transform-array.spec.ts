import { TransformArrayOf } from '../../helpers/transform-array';
import { MockTransformArrayOf } from '../../shared/mocks/helpers/transform-array.mock';

describe('TransformArrayOf', () => {
  let transformArrayOf: TransformArrayOf;
  let mockedTransformArrayOf: TransformArrayOf;

  let my_array: any[];
  let expect_result: any[];

  beforeAll(() => {
    transformArrayOf = new TransformArrayOf();
    mockedTransformArrayOf = new MockTransformArrayOf();

    my_array = [
      {
        test: 'test',
        test2: 'test2',
      },
      {
        test: 'test',
        test2: 'test2',
      },
    ];

    expect_result = [
      {
        Test: 'test',
        Test2: 'test2',
      },
      {
        Test: 'test',
        Test2: 'test2',
      },
    ];
  });
  describe('objects', () => {
    it('should return an array of objects', () => {
      const result = transformArrayOf.objects(my_array);
      expect(result).toEqual(expect_result);
    });
    it('should return an mocked array of objects', () => {
      const mocked_result = mockedTransformArrayOf.objects(my_array);
      expect(mocked_result).toEqual(expect_result);
    });
    it('should return an mocked and predefined array of objects', () => {
      const mocked_result = mockedTransformArrayOf.objects();
      expect(mocked_result).toEqual([{ Key: 'value' }]);
    });
  });
  describe('strings', () => {
    it('should return an array of strings', () => {
      const array = ['test', 'test2'];
      const result = transformArrayOf.strings(array);
      expect(result).toEqual(['Test', 'Test2']);
    });
    it('should return an mocked array of strings', () => {
      const array = ['test', 'test2'];
      const result = mockedTransformArrayOf.strings(array);
      expect(result).toEqual(['Test', 'Test2']);
    });

    it('should return an mocked and predefined array of strings', () => {
      const result = mockedTransformArrayOf.strings();
      expect(result).toEqual(['Value']);
    });
  });
});
