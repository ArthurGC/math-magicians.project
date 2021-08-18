import calculate from "./calculate.js";

describe("Calculate functionality Test", () => {
  //Arrange
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  const completedObj = {
    total: '5',
    next: '9',
    operation: 'x',
  }

  const operationsUser = {
      first: '5',
      second: '+',
      third: '9',
      fourth: 'x',
      fifth: '3',
      sixth: '-',
      seventh: '10',
      eighth: '÷',
      nineth: '2',
  }

  //Act
  //Assert
  test('Doing a hard coding multiplication 5 x 9 should be 45', () => {
    expect(calculate(completedObj, '=')).toEqual({
        total: '45',
        next: null,
        operation: null,
    })
  })

  test('Simulating a user interaction 5 + 9 * 3 - 10 / 2', () => {
      for (const key in operationsUser) {
         operationsUser[key]
      }
  })
});
