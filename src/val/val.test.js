const val = require('./val');

describe('val', () => {

    test('Корректное значение', () => {
        expect(val(50)).toBe(true);
    })

    test('Меньше корректного значения', () => {
        expect(val(-1)).toBe(false);
    })

    test('Больше корректного значения', () => {
        expect(val(101)).toBe(false);
    })

    test('Пограничное значение снизу', () => {
        expect(val(0)).toBe(true);
    })

    test('Пограничное значение сверху', () => {
        expect(val(100)).toBe(true);
    })
})
