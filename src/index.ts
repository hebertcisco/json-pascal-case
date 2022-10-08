import { JsonPascalCaseInterface } from './base/interfaces/JsonPascalCase.interface';
import { transformArrayOfObjects, transformArrayOfStrings } from './helpers/transform-array';
import { transformObject } from './helpers/transform-object';
import { transformString } from './helpers/transform-string';



export { transformObject } from './helpers/transform-object';
export { transformArrayOfObjects, transformArrayOfStrings } from './helpers/transform-array';
export { transformString } from './helpers/transform-string';

export class JsonPascalCase implements JsonPascalCaseInterface {
  transformArrayOfObjects(): object[] {
    throw new Error('Method not implemented.');
  }
  transformObject(): object {
    throw new Error('Method not implemented.');
  }
  transformArrayOfStrings(): string[] {
    throw new Error('Method not implemented.');
  }
  transformString(): string {
    throw new Error('Method not implemented.');
  }
}

export default JsonPascalCase;
