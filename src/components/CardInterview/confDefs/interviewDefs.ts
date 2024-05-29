import { FormItem } from '@components/castomForm/GetEditor/type';

export const interviewDefs = ({
  mutationAfterChange,
}: {
  mutationAfterChange: (item: FileList) => void;
}): FormItem<any>[] => [
  { id: 'companyName', header: 'Компания', type: 'text' },
  { id: 'linkjob', header: 'Ссылка на объявление', type: 'link' },
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
  {
    id: 'offer',
    header: 'Оффер',
    type: 'numberRange',
    isDoubleValue: true,
    marks: [
      {
        value: 0,
        label: `От `,
      },
      {
        value: 500000,
        label: `До`,
      },
    ],
  },
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
  {
    id: 'formatjob',
    header: 'Формат работы',
    type: 'select',
    isMulti: true,
    options: [
      { value: 'hybrid', label: 'Гибрид' },
      { value: 'remote', label: 'Удаленный формат' },
      { value: 'office', label: 'Офис' },
    ],
  },
  { id: 'articleTitle', header: 'Заголовок статьи', type: 'text' },
  { id: 'articleDescription', header: 'Описание статьи', type: 'reachEditor' },
  {
    id: 'uploadButton',
    header: 'Выбрать файлы',
    type: 'uploadButton',
    isMulti: true,
    onChange: mutationAfterChange,
    editorProps: {
      buttonProps: {
        variant: 'outlined',
      },
      uploadButtonProps: {
        variant: 'contained',
      },
      resetButtonProps: {
        variant: 'contained',
        color: 'error',
      },
    },
  },
];
