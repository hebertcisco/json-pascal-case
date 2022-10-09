import { JsonPascalCase } from '../../core/JsonPascalCase';
import { MockJsonPascalCase } from '../../shared/mocks/core/JsonPascalCase.mock';

describe('JsonPascalCase', () => {
  let jsonPascalCase: JsonPascalCase;
  beforeAll(() => {
    jsonPascalCase = new MockJsonPascalCase();
  });

  describe('transformArrayOfObjects', () => {
    it('should return an array of objects', () => {
      const array = [
        {
          test: 'test',
          test2: 'test2',
        },
        {
          test: 'test',
          test2: 'test2',
        },
      ];
      const result = jsonPascalCase.transformArrayOfObjects(array);
      expect(result).toEqual([
        {
          Test: 'test',
          Test2: 'test2',
        },
        {
          Test: 'test',
          Test2: 'test2',
        },
      ]);
    });
  });
  describe('transformObject', () => {
    it('should return an object', () => {
      const object = {
        test: 'test',
        test2: 'test2',
      };
      const result = jsonPascalCase.transformObject(object);
      expect(result).toEqual({
        Test: 'test',
        Test2: 'test2',
      });
    });
  });
  describe('transformArrayOfStrings', () => {
    it('should return an array of strings', () => {
      const array = ['test', 'test2'];
      const result = jsonPascalCase.transformArrayOfStrings(array);
      expect(result).toEqual(['Test', 'Test2']);
    });
  });
  describe('transformString', () => {
    it('should return a string', () => {
      const string = 'test';
      const result = jsonPascalCase.transformString(string);
      expect(result).toEqual('Test');
    });
  });
});
