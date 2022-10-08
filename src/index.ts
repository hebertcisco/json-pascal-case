import jsonPascalCase from './core/JsonPascalCase';

export * from './base';
export * from './core';
export * from './helpers';
export * from './shared';

export { TransformObject } from './helpers/transform-object';
export { TransformArrayOf } from './helpers/transform-array';

export { transformString } from './helpers/transform-string';

export type { JsonPascalCaseInterface } from './base/interfaces/JsonPascalCase.interface';
export type { TransformArrayOfObjectsType, TransformArrayOfStringsType } from './shared/types/transform-array.type';
export type { ObjectKeysType, ObjectValuesType, TransformObjectType } from './shared/types/transform-object.type';

export default jsonPascalCase;
