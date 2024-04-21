import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import QueryWrapper from '@components/QueryWrapper';
import CardInterviewList from './CardInterviewList/CardInterviewList';
import { getList } from '@network/api/api';

const CardInterview = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['interviews', currentPage],
    queryFn: () => getList('interviews', { page: currentPage }),
  });

  const interviews = data?.data.interviews;
  const totalPages = data?.data.totalPages;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationItems = Array.from({ length: totalPages }, (_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ));

  return (
    <QueryWrapper isLoading={isLoading} error={isError}>
      <CardInterviewList data={interviews} />
      {totalPages > 1 && (
        <Pagination className="justify-content-center">
          {paginationItems}
        </Pagination>
      )}
    </QueryWrapper>
  );
};

export default CardInterview;
