import { pascalCase } from 'pascal-case';

export function objectKeys(object: object) {
  const keys: string[] = [];
  if (object) {
    for (let key in object) {
      keys.push(pascalCase(key));
    }
  }
  return keys;
}
export function objectValues(object: object) {
  const values: any[] = [];
  if (object) {
    for (let value in object) {
      values.push(value);
    }
  }
  return values;
}
export function transformObject(object: object): object {
  return Object.assign({}, objectKeys(object), objectValues(object));
}
export default transformObject;
