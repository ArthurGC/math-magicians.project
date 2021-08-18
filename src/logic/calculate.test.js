import calculate from './calculate';

describe('Calculate functionality Test', () => {
  // Arrange
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  const completedObj = {
    total: '5',
    next: '9',
    operation: 'x',
  };

  const operationsUser = ['5', '+', '9', 'x', '3', '-', '10', '÷', '2', '='];

  // Act
  // Assert
  test('Doing a hard coding multiplication 5 x 9 should be 45', () => {
    expect(calculate(completedObj, '=')).toEqual({
      total: '45',
      next: null,
      operation: null,
    });
  });

  test('Simulating a user interaction 5 + 9 * 3 - 10 / 2 should be 16', () => {
    operationsUser.forEach((entry) => {
      obj = { ...obj, ...calculate(obj, entry) };
    });

    const { total } = obj;

    expect(total).toEqual('16');
  });
});
