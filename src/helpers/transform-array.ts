import { transformObject } from './transform-object';
import { transformString } from './transform-string';

export function transformArrayOfObjects(array: Array<object>) {
  return array.map((item) => {
    return transformObject(item);
  });
}
export function transformArrayOfStrings(array: Array<string>) {
  const transformed: string[] = [];
  for (let item of array) {
    transformed.push(transformString(item));
  }
  return transformed;
}
