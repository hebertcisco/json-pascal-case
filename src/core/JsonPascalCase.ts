import transformObject from '../helpers/transform-object';
import transformString from '../helpers/transform-string';
import transformArrayOf from '../helpers/transform-array';

import { JsonPascalCaseInterface } from '../base/interfaces/JsonPascalCase.interface';
import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../shared/types/transform-array.type';
import type { TransformObjectType } from '../shared/types/transform-object.type';
import type { TransformStringType } from '../shared/types/transform-string.type';

export class JsonPascalCase implements JsonPascalCaseInterface {
  public transformArrayOfObjects: TransformArrayOfObjectsType = (array) => {
    return transformArrayOf.objects(array);
  };
  public transformObject: TransformObjectType = (object) => {
    return transformObject.transform(object);
  };
  public transformArrayOfStrings: TransformArrayOfStringsType = (array) => {
    return transformArrayOf.strings(array);
  };
  public transformString: TransformStringType = (string) => {
    return transformString(string);
  };
}
export default new JsonPascalCase();
