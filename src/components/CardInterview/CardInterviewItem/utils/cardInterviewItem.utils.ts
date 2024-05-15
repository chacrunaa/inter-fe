import { INTERVIEW_GRADE_STATUS_STAGE } from '@components/CardInterview/constans';

export const changeTitle = (
  item: keyof typeof INTERVIEW_GRADE_STATUS_STAGE | undefined,
) => (item ? INTERVIEW_GRADE_STATUS_STAGE[item] : undefined);

export const generateColorChips = (item: string) => {
  switch (item) {
    case 'failure':
      return 'error';
    case 'processing':
      return 'info';
    case 'successful':
      return 'success';

    default:
      return 'default';
  }
};
