import { JsonPascalCase } from '../index';
import { MockJsonPascalCase } from '../shared/mocks/core/JsonPascalCase.mock';

describe('JsonPascalCase', () => {
  let mockedJsonPascalCase: JsonPascalCase;
  let jsonPascalCase: JsonPascalCase;

  let my_object: object;
  let expect_result: object;

  beforeAll(() => {
    mockedJsonPascalCase = new MockJsonPascalCase();
    jsonPascalCase = new JsonPascalCase();
    my_object = {
      name: 'foo',
      surname: 'bar',
    };
    expect_result = {
      Name: 'foo',
      Surname: 'bar',
    };
  });

  describe('transformObject', () => {
    it('should return an object', () => {
      const result = jsonPascalCase.transformObject(my_object);
      expect(result).toEqual(expect_result);
    });
    it('should return an mocked object', () => {
      const mocked_result = mockedJsonPascalCase.transformObject(my_object);
      expect(mocked_result).toEqual(expect_result);
    });
  });
  describe('transformArrayOfObjects', () => {
    it('should return an array of objects', () => {
      const result = jsonPascalCase.transformArrayOfObjects([my_object]);
      expect(result).toEqual([expect_result]);
    });
    it('should return an mocked array of objects', () => {
      const mocked_result = mockedJsonPascalCase.transformArrayOfObjects([my_object]);
      expect(mocked_result).toEqual([expect_result]);
    });
  });

  describe('transformString', () => {
    it('should return a string', () => {
      const result = jsonPascalCase.transformString('foo');
      expect(result).toEqual('Foo');
    });
    it('should return a mocked string', () => {
      const mocked_result = mockedJsonPascalCase.transformString('foo');
      expect(mocked_result).toEqual('Foo');
    });
  });
  describe('transformArrayOfStrings', () => {
    it('should return an array of strings', () => {
      const result = jsonPascalCase.transformArrayOfStrings(['foo']);
      expect(result).toEqual(['Foo']);
    });
    it('should return an mocked array of strings', () => {
      const mocked_result = jsonPascalCase.transformArrayOfStrings(['foo']);
      expect(mocked_result).toEqual(['Foo']);
    });
  });
});
