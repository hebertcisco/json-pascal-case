import transformObject from '../helpers/transform-object';
import transformString from '../helpers/transform-string';

import { JsonPascalCaseInterface } from '../base/interfaces/JsonPascalCase.interface';
import { transformArrayOfObjects, transformArrayOfStrings } from '../helpers/transform-array';

export class JsonPascalCase implements JsonPascalCaseInterface {
  public transformArrayOfObjects(array: object[]): object[] {
    return transformArrayOfObjects(array);
  }
  public transformObject(object: object): object {
    return transformObject(object);
  }
  public transformArrayOfStrings(array: string[]): string[] {
    return transformArrayOfStrings(array);
  }
  public transformString(string: string): string {
    return transformString(string);
  }
}
export default new JsonPascalCase();
