export const filterDefs: any[] = [
  { id: 'companyName', header: 'Компания', type: 'text' },
  {
    id: 'stage',
    header: 'Этап',
    type: 'select',
    isMulti: true,
    options: [
      { value: 'conversation', label: 'Знакомство' },
      { value: 'livecoding', label: 'Livecoding' },
      { value: 'techpart', label: 'Техническая часть' },
      { value: 'scrinning', label: 'Этап с HR' },
    ],
  },
  {
    id: 'status',
    header: 'Статус',
    type: 'select',
    options: [
      { value: 'processing', label: 'В процессе' },
      { value: 'failure', label: 'Отказано' },
      { value: 'successful', label: 'Успешно' },
    ],
  },
  {
    id: 'grade',
    header: 'Грейд',
    type: 'select',
    options: [
      { value: 'junior', label: 'Начинающий специалист' },
      { value: 'middle', label: 'Опытный специалист' },
      { value: 'senior', label: 'Ведущий специалист' },
    ],
  },
];
