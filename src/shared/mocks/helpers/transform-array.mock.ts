import mockTransformObject from './transform-object.mock';
import mockTransformString from './transform-string.mock';
import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../../types/transform-array.type';

export class MockTransformArrayOf {
  private arrayOfObjects = () => [
    mockTransformObject.transform({
      key: 'value',
    }),
  ];
  private arrayOfStrings = () => [mockTransformString('value')];

  public objects: TransformArrayOfObjectsType = (value) => {
    if (!value) {
      return this.arrayOfObjects();
    }
    return value.map((object) => mockTransformObject.transform(object));
  };
  public strings: TransformArrayOfStringsType = (value) => {
    if (!value) {
      return this.arrayOfStrings();
    }
    return value.map((string) => mockTransformString(string));
  };
}
export default new MockTransformArrayOf();
