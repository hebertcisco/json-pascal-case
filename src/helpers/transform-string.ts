import { pascalCase } from 'pascal-case';
import type { TransformStringType } from '../shared/types';

export const transformString: TransformStringType = (the_string) => {
  return pascalCase(the_string);
};
export default transformString;
