import { pascalCase } from 'pascal-case';

export function transformString(string: string) {
  return pascalCase(string);
}
