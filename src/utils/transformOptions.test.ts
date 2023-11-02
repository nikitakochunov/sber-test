import { transformOptions } from './transformOptions';

describe('transformOptions', () => {
    it('- should return transformed data when passed non-empty array', () => {
        const mock = [
            { name: 'Russian Ruble', id: 'RUB', min_size: '0.01' },
            { name: 'Belorussian Ruble', id: 'BYN', min_size: '0.01' }
        ];

        expect(transformOptions(mock, 'id', 'id')).toStrictEqual([
            { value: 'RUB', label: 'RUB' },
            { value: 'BYN', label: 'BYN' }
        ]);
        expect(transformOptions(mock, 'id', 'name')).toStrictEqual([
            { value: 'RUB', label: 'Russian Ruble' },
            { value: 'BYN', label: 'Belorussian Ruble' }
        ]);
    });

    it('- should return empty array when passed empty array', () => {
        expect(transformOptions([], 'id', 'name')).toStrictEqual([]);
    });
});
