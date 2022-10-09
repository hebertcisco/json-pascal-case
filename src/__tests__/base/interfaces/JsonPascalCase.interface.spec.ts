import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../../../shared/types/transform-array.type';
import type { TransformObjectType } from '../../../shared/types/transform-object.type';
import type { TransformStringType } from '../../../shared/types/transform-string.type';
import { JsonPascalCaseInterface } from '../../../base/interfaces/JsonPascalCase.interface';

class JsonPascalCaseClass implements JsonPascalCaseInterface {
  transformArrayOfObjects: TransformArrayOfObjectsType;
  transformArrayOfStrings: TransformArrayOfStringsType;

  transformObject: TransformObjectType;
  transformString: TransformStringType;

  constructor() {
    this.transformArrayOfObjects = () => [];
    this.transformArrayOfStrings = () => [];
    this.transformObject = () => ({});
    this.transformString = () => '';
  }
}
describe('JsonPascalCaseInterface', () => {
  it('should have the correct properties', () => {
    const jsonPascalCase = new JsonPascalCaseClass();
    expect(jsonPascalCase.transformArrayOfObjects).toBeDefined();
    expect(jsonPascalCase.transformArrayOfStrings).toBeDefined();
    expect(jsonPascalCase.transformObject).toBeDefined();
    expect(jsonPascalCase.transformString).toBeDefined();
  });
});
