import { useCallback } from 'react';
import CastomForm from '@components/castomForm';
import { Box, Button, Typography } from '@mui/material';
import { InterviewsParams } from '@network/models/interviews.model';
import { useQueryClient } from '@tanstack/react-query';

import { filterDefs } from '../confDefs/confDefs';

type Props = {
  filter: InterviewsParams;
  setFilter: (filter: InterviewsParams) => void;
};

const CardInterviewFilter = ({ filter, setFilter }: Props) => {
  const queryClient = useQueryClient();
  const handleSubmit = useCallback(
    (item: InterviewsParams) => {
      setFilter(item);
    },
    [setFilter],
  );

  const handleClear = useCallback(
    (reset: any) => {
      setFilter({});
      reset({});
      queryClient.invalidateQueries({ queryKey: ['interviews'] });
    },
    [queryClient, setFilter],
  );

  return (
    <CastomForm defaultValues={filter}>
      <CastomForm.Form onSubmitForm={handleSubmit} onResetForm={handleClear}>
        <Typography variant="h2">Фильтрация</Typography>
        <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '8fr 1fr 1fr' }}>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            <CastomForm.Items items={filterDefs} />
          </Box>
          <Button sx={{ maxHeight: 60 }} type="submit" variant="contained">
            Поиск
          </Button>
          <Button sx={{ maxHeight: 60 }} type="reset" variant="contained">
            Сбросить
          </Button>
        </Box>
      </CastomForm.Form>
    </CastomForm>
  );
};

export default CardInterviewFilter;
