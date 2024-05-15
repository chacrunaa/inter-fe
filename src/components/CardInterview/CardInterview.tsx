import QueryWrapper from '@components/QueryWrapper';
import { SelectChangeEvent } from '@mui/material';
import { getList } from '@network/api/api';
import { useIterwievStore } from '@stores/useIterwievStore/useIterwievStore';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import CardInterviewFilter from './CardInterviewFilter/CardInterviewFilter';
import CardInterviewList from './CardInterviewList/CardInterviewList';
import CardInterviewPagination from './CardInterviewPagination/CardInterviewPagination';

const CardInterview = () => {
  const pageSize = useIterwievStore(s => s.pageSize);
  const setPageSize = useIterwievStore(s => s.setPageSize);
  const currentPage = useIterwievStore(s => s.currentPage);
  const setCurrentPage = useIterwievStore(s => s.setCurrentPage);
  const filter = useIterwievStore(s => s.filter);
  const setFilter = useIterwievStore(a => a.setFilter);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['interviews', currentPage, pageSize, filter],
    queryFn: () => getList('interviews', { page: currentPage, pageSize, ...filter }),
  });

  const interviews = data?.interviews;
  const totalPages = data?.totalPages;

  const handleChangePage = useCallback(
    (_: React.ChangeEvent<unknown> | null, newPage: number) => {
      setCurrentPage(newPage);
    },
    [setCurrentPage],
  );

  const handleChangeRowsPerPage = useCallback(
    (event: SelectChangeEvent) => {
      setPageSize(parseInt(event.target.value));
      setCurrentPage(1);
    },
    [setCurrentPage, setPageSize],
  );

  return (
    <>
      <CardInterviewFilter filter={filter} setFilter={setFilter} />
      <QueryWrapper isLoading={isLoading} error={isError}>
        <CardInterviewList data={interviews} />
      </QueryWrapper>
      <CardInterviewPagination
        pageSize={pageSize}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default CardInterview;
