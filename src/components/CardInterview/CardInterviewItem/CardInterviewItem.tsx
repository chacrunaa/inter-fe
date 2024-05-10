import { useCallback } from 'react';
import { isArray } from 'lodash';
import { formatOffer } from '@components/CardInterview/utils/utils';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
  Typography,
} from '@mui/material';
import { InterviewAllItem } from '@network/models/interviews.model';

import { INTERVIEW_GRADE_STATUS_STAGE } from '../constans';
import { changeTitle, generateColorChips } from '@components/CardInterview/CardInterviewItem/cardInterviewItem.utils';

export type Props = InterviewAllItem;

const CardInterviewItem = (props: Props) => {
  const {
    companyName,
    status,
    nickName,
    grade,
    stage,
    articleTitle,
    articleDescription,
    id,
    maxoffer,
    minoffer,
    prefix,
  } = props;

  const generateColorChipsMemo = useCallback(generateColorChips, []);

  const changeTitleMemo =  useCallback(changeTitle, [])

  const createChips = useCallback(
    (arr: string | string[]) => {
      if (isArray(arr)) {
        const resilt = arr?.map((item: string) => (
          <Chip
            key={item}
            label={changeTitleMemo(
              item as keyof typeof INTERVIEW_GRADE_STATUS_STAGE | undefined,
            )}
            color={generateColorChipsMemo(item)}
          />
        ));
        return resilt;
      }
      return null;
    },
    [changeTitle, generateColorChips],
  );

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: 2 }}>
          <Typography sx={{ marginBottom: 1 }} gutterBottom variant="h5">
            {companyName}
          </Typography>

          <Typography sx={{ justifySelf: 'flex-end' }} variant="body1">
            {formatOffer(prefix, minoffer, maxoffer)}
          </Typography>

          {createChips(status)}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
          <Box>
            {nickName && (
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Автор: {nickName}
              </Typography>
            )}

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                marginBottom: 1,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              Грейд: {createChips(grade)}
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
              Этап: {createChips(stage)}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" color="text.secondary">
              {articleTitle}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {articleDescription}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href={`/interwiev/${id}`}>
          <Button>Подробнее</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardInterviewItem;
