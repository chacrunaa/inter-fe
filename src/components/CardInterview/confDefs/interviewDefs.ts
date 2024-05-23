export const interviewDefs: any[] = [
  { id: 'companyName', header: 'Компания', type: 'text', className: 'p-3' },
  {
    id: 'stage',
    header: 'Этап ревью',
    type: 'select',
    isMulti: true,
    options: [
      { value: 'conversation', label: 'Знакомство' },
      { value: 'livecoding', label: 'Livecoding' },
      { value: 'techpart', label: 'Техническая часть' },
      { value: 'scrinning', label: 'Этап с HR' },
    ],
  },
  { id: 'offer', header: 'Оффер', type: 'numberRange' },
  {
    id: 'status',
    header: 'Статус собеседования',
    type: 'select',
    options: [
      { value: 'processing', label: 'В процессе' },
      { value: 'failure', label: 'Отказано' },
      { value: 'successful', label: 'Успешно' },
    ],
  },
  {
    id: 'grade',
    header: 'Позиция/грейд',
    type: 'select',
    options: [
      { value: 'junior', label: 'Начинающий специалист' },
      { value: 'middle', label: 'Опытный специалист' },
      { value: 'senior', label: 'Ведущий специалист' },
    ],
  },
  { id: 'articleTitle', header: 'Заголовок статьи', type: 'text' },
  { id: 'articleDescription', header: 'Описание статьи', type: 'text' },
  {
    id: 'minoffer',
    header: 'Минимальный оффер',
    type: 'hidden',
    className: 'hidden-text',
  },
  {
    id: 'maxoffer',
    header: 'Максимальный оффер',
    type: 'hidden',
    className: 'hidden-text',
  },
];
