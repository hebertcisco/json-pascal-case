import { pascalCase } from 'pascal-case';

export function transformString(string: string): string {
  return pascalCase(string);
}
export default transformString;