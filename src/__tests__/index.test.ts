import JsonPascalCase from '../index';

describe('JsonPascalCase', () => {
  let myObject: object;

  beforeAll(() => {
    myObject = {
      name: 'foo',
      surname: 'bar',
    };
  });

  test('should match a valid UUID', () => {
    const expectResult = {
      Name: 'foo',
      Surname: 'bar',
    };
    const result = JsonPascalCase.transformObject(myObject);
    expect(result).toBeDefined();
  });
});
