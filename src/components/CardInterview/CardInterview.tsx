import { Pagination } from 'react-bootstrap';
import QueryWrapper from '@components/QueryWrapper';
import { getList } from '@network/api/api';
import { useQuery } from '@tanstack/react-query';

import CardInterviewList from './CardInterviewList/CardInterviewList';

const CardInterview = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['interviews'],
    queryFn: () => getList('interviews'),
  });

  const interviews = data?.interviews;
  const totalPages = data?.totalPages;

  return (
    <QueryWrapper isLoading={isLoading} error={isError}>
      <CardInterviewList data={interviews} />
      <Pagination>{totalPages} Хуев во рту</Pagination>
    </QueryWrapper>
  );
};

export default CardInterview;
