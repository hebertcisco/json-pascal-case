import { JsonPascalCase } from '../index';
import { MockJsonPascalCase } from '../shared/mocks/core/JsonPascalCase.mock';

describe('JsonPascalCase', () => {
  let jsonPascalCase: JsonPascalCase;
  let myObject: object;

  beforeAll(() => {
    jsonPascalCase = new MockJsonPascalCase();
    myObject = {
      name: 'foo',
      surname: 'bar',
    };
  });

  describe('transformObject', () => {
    it('should return an object', () => {
      const result = jsonPascalCase.transformObject(myObject);
      expect(result).toEqual({
        Name: 'foo',
        Surname: 'bar',
      });
    });
  });
  describe('transformArrayOfObjects', () => {
    it('should return an array of objects', () => {
      const result = jsonPascalCase.transformArrayOfObjects([myObject]);
      expect(result).toEqual([
        {
          Name: 'foo',
          Surname: 'bar',
        },
      ]);
    });
  });

  describe('transformString', () => {
    it('should return a string', () => {
      const result = jsonPascalCase.transformString('foo');
      expect(result).toEqual('Foo');
    });
  });
  describe('transformArrayOfStrings', () => {
    it('should return an array of strings', () => {
      const result = jsonPascalCase.transformArrayOfStrings(['foo']);
      expect(result).toEqual(['Foo']);
    });
  });
});
