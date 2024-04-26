import { Box } from '@mui/material';
import { InterviewAllItem } from '@network/models/interviews.model';

import CardInterviewItem from '../CardInterviewItem/CardInterviewItem';

export type CardProps = {
  data?: InterviewAllItem[];
};

const CardInterviewList = ({ data }: CardProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {data?.map(interview => <CardInterviewItem key={interview.id} {...interview} />)}
    </Box>
  );
};

export default CardInterviewList;
