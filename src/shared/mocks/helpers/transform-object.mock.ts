import transformObject, { TransformObject } from '../../../helpers/transform-object';
import type { TransformObjectType } from '../../types/transform-object.type';

export class MockTransformObject extends TransformObject {
  public transform: TransformObjectType = (the_object) => {
    if (!the_object || typeof the_object !== 'object') {
      return {
        Key: 'value',
      };
    }
    return transformObject.transform(the_object);
  };
}
export default new MockTransformObject();
