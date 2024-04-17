import CardInterviewItem from '../CardInterviewItem/CardInterviewItem';

import style from '../cardInterview.module.scss';

export type InterviewItemProps = {
    id: number;
    companyName: string;
    articleTitle: string;
    articleDescription: string;
    status: string;
    grade: string;
    stage: string;
    nickName: string;
    maxoffer: number;
    minoffer: number | null;
    prefix: string | null;
    createdAt: string;
    updatedAt: string;
};

export type CardProps = {
    data: InterviewItemProps[];
};

const CardInterviewList = ({ data }: CardProps) => {
    return (
        <div className={style.wrapperList}>
            {data?.map(interview => <CardInterviewItem key={interview.id} {...interview} />)}
        </div>
    );
};

export default CardInterviewList;
