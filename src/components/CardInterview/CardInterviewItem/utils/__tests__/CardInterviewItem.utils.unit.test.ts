import {
  changeTitle,
  generateColorChips,
} from '@components/CardInterview/CardInterviewItem/utils/cardInterviewItem.utils';
import { INTERVIEW_GRADE_STATUS_STAGE } from '@components/CardInterview/constans';

describe('тест функции generateColorChips', () => {
  const testCases2 = [
    {
      status: 'successful',
      expectedOutput: 'success',
    },
    {
      status: 'processing',
      expectedOutput: 'info',
    },
    {
      status: 'failure',
      expectedOutput: 'error',
    },
    {
      status: 'unknown',
      expectedOutput: 'default',
    },
  ];

  it.each(testCases2)(
    'правильно определяет статус $expectedOutput при входном значениии $status ',
    ({ status, expectedOutput }) => {
      const formattedColorChip = generateColorChips(status);
      expect(formattedColorChip.replace(/\s+/g, '')).toBe(
        expectedOutput.replace(/\s+/g, ''),
      );
    },
  );
});

describe('тест функции changeTitle', () => {
  const testCases = [
    { status: 'successful', expectedOutput: 'Успешно' },
    { status: 'processing', expectedOutput: 'В процессе' },
    { status: 'failure', expectedOutput: 'Отказано' },
    { status: 'conversation', expectedOutput: 'Знакомство' },
    { status: 'livecoding', expectedOutput: 'Livecoding' },
    { status: 'techpart', expectedOutput: 'Техническая часть' },
    { status: 'scrinning', expectedOutput: 'Этап с HR' },
    { status: 'junior', expectedOutput: 'Начинающий специалист' },
    { status: 'middle', expectedOutput: 'Опытный специалист' },
    { status: 'senior', expectedOutput: 'Ведущий специалист' },
    { status: 'unknown', expectedOutput: undefined },
  ];

  it.each(testCases)(
    'правильно определяет заголовок для статуса $status',
    ({ status, expectedOutput }) => {
      const formattedTitle = changeTitle(
        status as keyof typeof INTERVIEW_GRADE_STATUS_STAGE,
      );
      expect(formattedTitle).toBe(expectedOutput);
    },
  );
});
