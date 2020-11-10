const tambah = require('./tambah.js');

test('hasil yang diharpkan: 1+2 sama dengan 3', () => {
    expect(tambah(1, 2)).toBe(3);
});