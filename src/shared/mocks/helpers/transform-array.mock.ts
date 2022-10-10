import mockTransformObject from './transform-object.mock';
import mockTransformString from './transform-string.mock';
import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../../types/transform-array.type';

export class MockTransformArrayOf {
  public objects: TransformArrayOfObjectsType = (value) => {
    if (!value) {
      return [
        mockTransformObject.transform({
          key: 'value',
        }),
      ];
    }
    return value.map((object) => mockTransformObject.transform(object));
  };
  public strings: TransformArrayOfStringsType = (value) => {
    if (!value) {
      return [mockTransformString('value')];
    }
    return value.map((string) => mockTransformString(string));
  };
}
export default new MockTransformArrayOf();
