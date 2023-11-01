import currencyReducer, { setCurrentValue } from '../slice';

describe('currencyReducer', () => {
    it('- should return default state when passed an empty action', () => {
        const result = currencyReducer(undefined, { type: '' });
        expect(result).toEqual({ entities: [], currentValue: null, error: null, status: null });
    });
    it("- should set new current value with 'setCurrentValue' action", () => {
        const action = { type: setCurrentValue.type, payload: { id: 'RUB' } };
        const result = currencyReducer(
            {
                entities: [
                    { name: 'Russian Ruble', id: 'RUB', min_size: '0.01' },
                    { name: 'Belorussian Ruble', id: 'BYN', min_size: '0.01' }
                ],
                currentValue: null,
                error: null,
                status: null
            },
            action
        );

        expect(result.currentValue).toStrictEqual({ name: 'Russian Ruble', id: 'RUB', min_size: '0.01' });
    });
});
