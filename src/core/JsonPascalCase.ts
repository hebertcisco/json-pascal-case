import transformObject from '../helpers/transform-object';
import transformString from '../helpers/transform-string';
import transformArrayOf from '../helpers/transform-array';

import { JsonPascalCaseInterface } from '../base/interfaces/JsonPascalCase.interface';

export class JsonPascalCase implements JsonPascalCaseInterface {
  public transformArrayOfObjects(array: object[]): object[] {
    return transformArrayOf.objects(array);
  }
  public transformObject(object: object): object {
    return transformObject.transform(object);
  }
  public transformArrayOfStrings(array: string[]): string[] {
    return transformArrayOf.strings(array);
  }
  public transformString(string: string): string {
    return transformString(string);
  }
}
export default new JsonPascalCase();
