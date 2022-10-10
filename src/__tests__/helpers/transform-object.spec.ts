import { TransformObject } from '../../helpers/transform-object';
import { MockTransformObject } from '../../shared/mocks/helpers/transform-object.mock';

describe('TransformObject', () => {
  let transformObject: TransformObject;
  beforeAll(() => {
    transformObject = new MockTransformObject();
  });
  describe('transform', () => {
    it('should return an object', () => {
      const object = {
        test: 'value',
        test2: 'value' + 2,
      };
      const result = transformObject.transform(object);
      expect(result).toEqual({
        Test: 'value',
        Test2: 'value' + 2,
      });
    });
    it('should return an mocked object', () => {
      const result = transformObject.transform();
      expect(result).toEqual({
        Key: 'value',
      });
    });
  });
});
