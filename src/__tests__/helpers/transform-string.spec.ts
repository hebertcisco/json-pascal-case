import transformString from '../../helpers/transform-string';

describe('transformString', () => {
  it('should return a string', () => {
    const string = 'test';
    const result = transformString(string);
    expect(result).toEqual('Test');
  });
});
