import type { TOption } from 'src/components/ui/SelectField/types';

export const transformOptions = <
    T extends { [key in K]: string },
    K extends keyof T
>(
    options: T[],
    valueKey: K,
    labelKey: K
): TOption[] =>
    options.length > 0
        ? options.map((option: T) => ({
              value: option[valueKey],
              label: option[labelKey]
          }))
        : [];
