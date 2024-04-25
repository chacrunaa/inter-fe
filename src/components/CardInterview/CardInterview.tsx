import { useCallback } from 'react';
import QueryWrapper from '@components/QueryWrapper';
import {
  Box,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { getList } from '@network/api/api';
import { useIterwievStore } from '@stores/useGlobalStore';
import { useQuery } from '@tanstack/react-query';

import CardInterviewFilter from './CardInterviewFilter/CardInterviewFilter';
import CardInterviewList from './CardInterviewList/CardInterviewList';

const CardInterview = () => {
  const pageSize = useIterwievStore(s => s.pageSize);
  const setPageSize = useIterwievStore(s => s.setPageSize);
  const currentPage = useIterwievStore(s => s.currentPage);
  const setCurrentPage = useIterwievStore(s => s.setCurrentPage);
  const filter = useIterwievStore(s => s.filter);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['interviews', currentPage, pageSize, filter],
    queryFn: () =>
      getList('interviews', { page: currentPage, pageSize, ...filter } as any),
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
      <CardInterviewFilter />
      <QueryWrapper isLoading={isLoading} error={isError}>
        <CardInterviewList data={interviews} />
      </QueryWrapper>
      <Box
        sx={{
          display: 'flex',
          marginTop: 3,
          alignItems: 'center',
          gap: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body1">Элементов на страницу:</Typography>
          <FormControl>
            <Select value={pageSize.toString()} onChange={handleChangeRowsPerPage}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
      </Box>
    </>
  );
};

export default CardInterview;
