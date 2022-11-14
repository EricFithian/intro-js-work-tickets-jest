const {sum, multipleInputSum, multipleOnlyNumsSum} = require('./intro-js-tickets');


test('adds 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 and "abc" to return "Please only enter numbers"', () => {
    expect(sum(1, 'abc')).toBe("Please only enter numbers");
});

test('adds "abc" and 2 to return "Please only enter numbers"', () => {
    expect(sum('abc', 2)).toBe("Please only enter numbers");
});

test('adds 3 and 5 to equal 8', () => {
    expect(multipleInputSum(3, 5)).toBe(8);
});

test('adds 3, 5 and 12 to equal 20 instead of an error', () => {
    expect(multipleInputSum(3, 5, 12)).toBe(20);
});

test('adds 3, "abc" and 12 to return "Please only enter numbers"', () => {
    expect(multipleOnlyNumsSum(3, "abc", 12)).toBe("Please only enter numbers");
});

test('adds 3, 7, 9 and "hello" to return "Please only enter numbers"', () => {
    expect(multipleOnlyNumsSum(3, 7, 9, "hello")).toBe("Please only enter numbers");
});

test('adds 3, 7, 9 and 21 to be 40', () => {
    expect(multipleOnlyNumsSum(3, 7, 9, 21)).toBe(40);
});

