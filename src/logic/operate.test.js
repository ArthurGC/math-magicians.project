import operate from './operate';

describe('Operate functionality Test', () => {
  // Arrange
  const sum = {
    numberOne: '10',
    numberTwo: '7',
    operation: '+',
  };
  const sub = {
    numberOne: '20',
    numberTwo: '15',
    operation: '-',
  };
  const mult = {
    numberOne: '5',
    numberTwo: '7',
    operation: 'x',
  };
  const div = {
    numberOne: '144',
    numberTwo: '12',
    operation: '÷',
  };
  const mod = {
    numberOne: '13',
    numberTwo: '169',
    operation: '%',
  };

  // Act
  const resultSum = operate(sum.numberOne, sum.numberTwo, sum.operation);
  const resultSub = operate(sub.numberOne, sub.numberTwo, sub.operation);
  const resultMul = operate(mult.numberOne, mult.numberTwo, mult.operation);
  const resultDiv = operate(div.numberOne, div.numberTwo, div.operation);
  const resultMod = operate(mod.numberOne, mod.numberTwo, mod.operation);
  // Assert
  test('Test 10 plus 7 should be 17', () => {
    expect(resultSum).toEqual('17');
  });

  test('Test 20 minus 15 should be 5', () => {
    expect(resultSub).toEqual('5');
  });

  test('Test 5 times 7 should be 35', () => {
    expect(resultMul).toEqual('35');
  });

  test('Test 144 div 12 should be 12', () => {
    expect(resultDiv).toEqual('12');
  });

  test('Test 13 mod 169 should be 13', () => {
    expect(resultMod).toEqual('13');
  });
});
