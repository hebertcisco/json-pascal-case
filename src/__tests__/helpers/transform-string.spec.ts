import transformString from '../../helpers/transform-string';
import mockTransformString from '../../shared/mocks/helpers/transform-string.mock';

describe('transformString', () => {
  it('should return a string', () => {
    const string = 'value';
    const result = transformString(string);
    expect(result).toEqual('Value');
  });
  it('should return a mocked string', () => {
    const result = mockTransformString();
    expect(result).toEqual('Value');
  });
});
