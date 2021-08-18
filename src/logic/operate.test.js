import operate from './operate';

describe('Test operation', () => {
  test('Sum operation', () => {
    const numA = '5';
    const numB = '5';
    const result = operate(numA, numB, '+');
    expect(result).toEqual('10');
  });

  test('Minus operation', () => {
    const numA = '10';
    const numB = '5';
    const result = operate(numA, numB, '-');
    expect(result).toEqual('5');
  });

  test('Times operation', () => {
    const numA = '10';
    const numB = '5';
    const result = operate(numA, numB, 'x');
    expect(result).toEqual('50');
  });

  test('Division operation', () => {
    const numA = '10';
    const numB = '5';
    const result = operate(numA, numB, '÷');
    expect(result).toEqual('2');
  });

  test('Mod operation', () => {
    const numA = '10';
    const numB = '4';
    const result = operate(numA, numB, '%');
    expect(result).toEqual('2');
  });
});
