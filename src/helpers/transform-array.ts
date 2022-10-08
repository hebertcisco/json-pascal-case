import transformObject from './transform-object';
import { transformString } from './transform-string';
import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../shared/types';

export class TransformArrayOf {
  public objects: TransformArrayOfObjectsType = (parameter) => {
    const newArray: Array<object> = [];
    for (let i = 0; i < parameter.length; i++) {
      newArray.push(transformObject.transform(parameter[i]));
    }
    return newArray;
  };
  public strings: TransformArrayOfStringsType = (array) => {
    const newArray: Array<string> = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(transformString(array[i]));
    }
    return newArray;
  };
}
export default new TransformArrayOf();
