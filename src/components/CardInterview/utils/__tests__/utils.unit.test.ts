import { formatOffer } from '@components/CardInterview/utils/utils';

describe('тест функции formatOffer', () => {
  const testCases = [
    {
      prefix: null,
      minOffer: null,
      maxOffer: null,
      expectedOutput: 'Размер офера не указан',
    },
    {
      prefix: 'от',
      minOffer: 1000,
      maxOffer: null,
      expectedOutput: 'от 1 000 ₽',
    },
    {
      prefix: 'до',
      minOffer: null,
      maxOffer: 2000,
      expectedOutput: 'до 2 000 ₽',
    },
    {
      prefix: null,
      minOffer: 3000,
      maxOffer: 4000,
      expectedOutput: '3 000 - 4 000 ₽',
    },
    {
      prefix: 'от',
      minOffer: 0,
      maxOffer: null,
      expectedOutput: 'Размер офера не указан',
    },
    {
      prefix: 'до',
      minOffer: null,
      maxOffer: 0,
      expectedOutput: 'Размер офера не указан',
    },
    {
      prefix: null,
      minOffer: 0,
      maxOffer: 0,
      expectedOutput: 'Размер офера не указан',
    },
    {
      prefix: null,
      minOffer: 10000,
      maxOffer: 0,
      expectedOutput: 'от 10 000 ₽',
    },
    {
      prefix: null,
      minOffer: 0,
      maxOffer: 10000,
      expectedOutput: 'до 10 000 ₽',
    },
  ];

  it.each(testCases)(
    'формат значения ЗП в соответствии с данными prefix: $prefix minOffer: $minOffer maxOffer: $maxOffer',
    ({ prefix, minOffer, maxOffer, expectedOutput }) => {
      const formattedOffer = formatOffer(prefix, minOffer, maxOffer);
      expect(formattedOffer.replace(/\s+/g, '')).toBe(expectedOutput.replace(/\s+/g, ''));
    },
  );
});
