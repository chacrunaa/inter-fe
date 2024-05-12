import {
  Box,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { PAGE_SIZE } from '@stores/useIterwievStore/constants';

type Props = {
  pageSize: number;
  handleChangeRowsPerPage: (event: SelectChangeEvent) => void;
  totalPages?: number;
  currentPage: number;
  paginationArrayRowsPerPage?: number[];
  handleChangePage: (_: React.ChangeEvent<unknown> | null, newPage: number) => void;
};

const CardInterviewPagination = ({
  pageSize,
  handleChangeRowsPerPage,
  totalPages,
  currentPage,
  paginationArrayRowsPerPage = [PAGE_SIZE, 10, 25, 50, 100],
  handleChangePage,
}: Props) => {
  return (
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
          <Select value={pageSize.toString()} onChange={handleChangeRowsPerPage} id='pagination-count'>
            {paginationArrayRowsPerPage.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} />
    </Box>
  );
};

export default CardInterviewPagination;
