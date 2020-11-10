const { expect } = require('@jest/globals');
const { add, mul, sub, div } = require('./arith');

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
    '%i + %i = %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
    '%i - %i = %i', (a, b, expected) => {
        expect(sub(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [-1, 2, -2], [2, 2, 4]])(
    '%i * %i = %i', (a, b, expected) => {
        expect(mul(a, b)).toBe(expected);
    },
);

test.each([[1, 1, 1], [-1, 2, -0.5], [2, 2, 1]])(
    '%i /npm %i = %i', (a, b, expected) => {
        expect(div(a, b)).toBe(expected);
    },
);
