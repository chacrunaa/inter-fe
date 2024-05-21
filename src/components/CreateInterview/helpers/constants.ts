import { GradeType, StageType } from './types';

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const stageOptions: StageType[] = [
  'livecoding',
  'conversation',
  'techpart',
  'scrinning',
];

export const gradeOptions: GradeType[] = ['junior', 'middle', 'senior'];
