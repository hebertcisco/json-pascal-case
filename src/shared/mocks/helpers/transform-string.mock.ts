import transformString from '../../../helpers/transform-string';
import type { TransformStringType } from '../../types/transform-string.type';

export const mockTransformString: TransformStringType = (the_string) => {
  if (!the_string && typeof the_string !== 'string') {
    return 'Value';
  }
  return transformString(the_string);
};
export default mockTransformString;
