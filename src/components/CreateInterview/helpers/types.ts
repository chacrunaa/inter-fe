export type StatusType = 'processing' | 'failure' | 'successful';
export type GradeType = 'junior' | 'middle' | 'senior';
export type StageType = 'conversation' | 'livecoding' | 'techpart' | 'scrinning';

export interface CreateInterviewDto {
  companyName: string;
  status: StatusType[];
  grade: GradeType[];
  stage: StageType[];
  articleTitle: string;
  articleDescription: string;
  minoffer: number;
  maxoffer: number;
}
