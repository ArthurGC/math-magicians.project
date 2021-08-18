import calculate from "./calculate";

describe('Test calculate function', () => {
    //Arrange
    let obj = {
        total:null,
        next: null,
        operation:null,
    }
    const operations = ['5','x','7','+','10','÷','5','='];
    //Act
    //Assert
    test('Testing an user interaction should 9', () =>{
        operations.forEach(oper => {
            obj = { ...obj, ...calculate(obj,oper)}
        })
        let total = obj.total;
        expect(total).toEqual('9');
    })
})
