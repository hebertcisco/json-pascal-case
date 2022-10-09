import { pascalCase } from 'pascal-case';
import type { ObjectKeysType, ObjectValuesType, TransformObjectType } from '../shared/types';

export class TransformObject {
  protected objectKeys: ObjectKeysType = (the_object) => {
    const keys: string[] = [];
    if (the_object) {
      for (const key in the_object) {
        keys.push(pascalCase(key));
      }
    }
    return keys;
  };
  protected objectValues: ObjectValuesType = (the_object) => {
    const values: any[] = [];
    if (the_object) {
      Object.values(the_object).forEach((value) => {
        values.push(value);
      });
    }
    return values;
  };
  public transform: TransformObjectType = (the_object) => {
    const keys = this.objectKeys(the_object);
    const values = this.objectValues(the_object);

    const result: any = {};

    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = values[i];
    }

    return result;
  };
}

export default new TransformObject();
