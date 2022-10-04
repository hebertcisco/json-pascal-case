import { pascalCase } from 'pascal-case';

export function transformObject(object: Object) {
  const keys: string[] = [];
  if (object) {
    for (let key of Object.keys(object)) {
      keys.push(pascalCase(key));
    }
  }
  return keys;
}
export default transformObject;
