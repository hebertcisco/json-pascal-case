import transformObject from './transform-object';
import transformString from './transform-string';
import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../shared/types';

export class TransformArrayOf {
  public objects: TransformArrayOfObjectsType = (array_of_objects) => {
    return array_of_objects?.map((object) => transformObject.transform(object)) as object[];
  };
  public strings: TransformArrayOfStringsType = (array_of_strings) => {
    return array_of_strings?.map((string) => transformString(string)) as string[];
  };
}
export default new TransformArrayOf();
