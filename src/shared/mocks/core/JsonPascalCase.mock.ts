import jsonPascalCase from '../../../core/JsonPascalCase';
import mockTransformObject from '../helpers/transform-object.mock';
import mockTransformString from '../helpers/transform-string.mock';

import { JsonPascalCaseInterface } from '../../../base/interfaces/JsonPascalCase.interface';

import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../../types/transform-array.type';
import type { TransformObjectType } from '../../types/transform-object.type';
import type { TransformStringType } from '../../types/transform-string.type';

export class MockJsonPascalCase implements JsonPascalCaseInterface {
  public transformArrayOfObjects: TransformArrayOfObjectsType = (array) => {
    return jsonPascalCase.transformArrayOfObjects(array);
  };
  public transformObject: TransformObjectType = (object) => {
    return mockTransformObject.transform(object);
  };
  public transformArrayOfStrings: TransformArrayOfStringsType = (array) => {
    return jsonPascalCase.transformArrayOfStrings(array);
  };
  public transformString: TransformStringType = (string) => {
    return mockTransformString(string);
  };
}
export default new MockJsonPascalCase();
