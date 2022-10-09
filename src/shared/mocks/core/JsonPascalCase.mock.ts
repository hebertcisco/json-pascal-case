import jsonPascalCase from '../../../core/JsonPascalCase';
import mockTransformObject from '../helpers/transform-object.mock';
import mockTransformString from '../helpers/transform-string.mock';
import { JsonPascalCaseInterface } from '../../../base/interfaces/JsonPascalCase.interface';

export class MockJsonPascalCase implements JsonPascalCaseInterface {
  public transformArrayOfObjects(array: object[]): object[] {
    return jsonPascalCase.transformArrayOfObjects(array);
  }
  public transformObject(object: object): object {
    return mockTransformObject.transform(object);
  }
  public transformArrayOfStrings(array: string[]): string[] {
    return jsonPascalCase.transformArrayOfStrings(array);
  }
  public transformString(string: string): string {
    return mockTransformString(string);
  }
}
export default new MockJsonPascalCase();
