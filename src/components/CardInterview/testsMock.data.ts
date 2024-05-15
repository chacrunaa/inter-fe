import { Props } from '@components/CardInterview/CardInterviewItem/CardInterviewItem';

export const fakeInterviewItem: Props = {
  id: 78231,
  companyName: 'Газпром',
  //@ts-ignore Требуется правка типа полей со стороны бэка
  status: ['processing'],
  //@ts-ignore
  grade: ['middle'],
  //@ts-ignore
  stage: ['conversation'],
  articleTitle: 'Заголовок статьи',
  articleDescription: 'Я ему одно, он мне другое, так и живём',
  nickName: 'Лютый',
  //@ts-ignore
  minoffer: 10000,
  maxoffer: 10000,
  prefix: '',
};
