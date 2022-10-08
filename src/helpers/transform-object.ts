import { pascalCase } from 'pascal-case';
import type { ObjectKeysType, ObjectValuesType, TransformObjectType } from '../shared/types';

export class TransformObject {
  protected objectKeys: ObjectKeysType = (the_object) => {
    const keys: string[] = [];
    if (the_object) {
      for (let key in the_object) {
        keys.push(pascalCase(key));
      }
    }
    return keys;
  };
  protected objectValues: ObjectValuesType = (the_object) => {
    const values: any[] = [];
    if (the_object) {
      for (let value in the_object) {
        values.push(value);
      }
    }
    return values;
  };
  public transform: TransformObjectType = (the_object) => {
    return Object.assign({}, this.objectKeys(the_object), this.objectValues(the_object));
  };
}

export default new TransformObject();
