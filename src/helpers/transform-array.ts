import { transformObject } from './transform-object';
import { transformString } from './transform-string';

export function transformArrayOfObjects(array: Array<object>): object[] {
  const newArray: Array<object> = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transformObject(array[i]));
  }
  return newArray;
}
export function transformArrayOfStrings(array: Array<string>): string[] {
  const newArray: Array<string> = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transformString(array[i]));
  }
  return newArray;
}
