import type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from '../../shared/types/transform-array.type';
import type { TransformObjectType } from '../../shared/types/transform-object.type';
import type { TransformStringType } from '../../shared/types/transform-string.type';

export interface JsonPascalCaseInterface {
  transformArrayOfObjects: TransformArrayOfObjectsType;
  transformArrayOfStrings: TransformArrayOfStringsType;

  transformObject: TransformObjectType;
  transformString: TransformStringType;
}
