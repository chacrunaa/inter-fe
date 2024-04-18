import { InterviewAllItem } from '@network/models/interviews.model';

import CardInterviewItem from '../CardInterviewItem/CardInterviewItem';

import style from '../cardInterview.module.scss';

export type CardProps = {
  data?: InterviewAllItem[];
};

const CardInterviewList = ({ data }: CardProps) => {
  return (
    <div className={style.wrapperList}>
      {data?.map(interview => <CardInterviewItem key={interview.id} {...interview} />)}
    </div>
  );
};

export default CardInterviewList;
