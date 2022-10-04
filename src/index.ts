import { transformArrayOfObjects, transformArrayOfStrings } from './helpers/transform-array';
import { transformObject } from './helpers/transform-object';
import { transformString } from './helpers/transform-string';

const JsonPascalCase = {
  transformArrayOfObjects,
  transformObject,
  transformArrayOfStrings,
  transformString,
};

export { transformObject } from './helpers/transform-object';
export { transformArrayOfObjects, transformArrayOfStrings } from './helpers/transform-array';
export { transformString } from './helpers/transform-string';

export default JsonPascalCase;
