export const INTERVIEW_STATUS = {
  processing: 'В процессе',
  failure: 'Отказано',
  successful: 'Успешно',
};
export const INTERVIEW_STAGE = {
  conversation: 'Знакомство',
  livecoding: 'Livecoding',
  techpart: 'Техническая часть',
  scrinning: 'Этап с HR',
};
export const INTERVIEW_GRADE = {
  junior: 'Начинающий специалист',
  middle: 'Опытный специалист',
  senior: 'Ведущий специалист',
};
export const INTERVIEW_GRADE_STATUS_STAGE = {
  ...INTERVIEW_STATUS,
  ...INTERVIEW_STAGE,
  ...INTERVIEW_GRADE,
} as const;
