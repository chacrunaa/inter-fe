import { useState } from 'react';
import { postItem } from '@network/api/api';
import { useMutation } from '@tanstack/react-query';
import './CreateInterview.scss'
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Slider, TextField, Typography } from '@mui/material';
import { HOME_PATH } from '@constatns/pathPage';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@stores/useGlobalStore';
import { CreateInterviewDto, GradeType, StageType, StatusType } from './helpers/types';
import { gradeOptions, MenuProps, stageOptions } from './helpers/constants';

const CreateInterview = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [status, setStatus] = useState<StatusType[]>([]);
  const [grade, setGrade] = useState<GradeType[]>([]);
  const [stage, setStage] = useState<StageType[]>([]);
  const [articleTitle, setArticleTitle] = useState<string>('');
  const [articleDescription, setArticleDescription] = useState<string>('');
  const [offer, setOffer] = useState<number[]>([100000, 300000]);

  const token = useAuthStore(s => s.token);

  const mutation = useMutation({
    mutationFn: (formData: any) => postItem('interviews', formData, token),
    onSuccess: (data) => {
      console.log('Success:', data);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  const handleChangeOffer = (event: Event, newValue: number | number[]) => {
    setOffer(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value}`;
  }

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as StatusType;
    setStatus([value]);
  };

  const handleGradeChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setGrade(
      typeof value === 'string' ? (value.split(',') as GradeType[]) : value,
    );
  };

  const handleStageChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setStage(
      typeof value === 'string' ? (value.split(',') as StageType[]) : value,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: CreateInterviewDto = {
      companyName,
      status,
      grade,
      stage,
      articleTitle,
      articleDescription,
      minoffer: offer[0],
      maxoffer: offer[1],
    };

    mutation.mutate(formData);
  };

  return (
    <Box component="form" className="interview-form" onSubmit={handleSubmit}>
      <Box className="form-header">
        <Link to={HOME_PATH} className="back-link">
          <Button type="button" className="back-button">
            &larr;
          </Button>
        </Link>
        <Typography variant="subtitle1" className="form-title">Как правильно заполнять форму?</Typography>
      </Box>

      <FormControl fullWidth className="form-group">
        <TextField
          label="Название компании"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </FormControl>

      <FormControl component="fieldset" fullWidth className="form-group">
        <Typography component="legend" className="form-title">Статус собеседования</Typography>
        <Box className="radio-group">
          <FormControlLabel
            control={<Checkbox checked={status.includes('successful')} onChange={handleStatusChange} value="successful" />}
            label="Successful"
          />
          <FormControlLabel
            control={<Checkbox checked={status.includes('processing')} onChange={handleStatusChange} value="processing" />}
            label="Processing"
          />
          <FormControlLabel
            control={<Checkbox checked={status.includes('failure')} onChange={handleStatusChange} value="failure" />}
            label="Failure"
          />
        </Box>
      </FormControl>

      <Box className="form-group form-row">
        <FormControl className="form-item">
          <InputLabel id="multiple-checkbox-label-grade">Позиция/грейд</InputLabel>
          <Select
            labelId="multiple-checkbox-label-grade"
            multiple
            value={grade}
            onChange={handleGradeChange}
            input={<OutlinedInput label="Позиция/грейд" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {gradeOptions.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={grade.indexOf(name) > -1} />
                <ListItemText primary={name.charAt(0).toUpperCase() + name.slice(1)} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className="form-item">
          <InputLabel id="multiple-checkbox-label">Этап ревью</InputLabel>
          <Select
            labelId="multiple-checkbox-label"
            multiple
            value={stage}
            onChange={handleStageChange}
            input={<OutlinedInput label="Этап ревью" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {stageOptions.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={stage.indexOf(name) > -1} />
                <ListItemText primary={name.charAt(0).toUpperCase() + name.slice(1)} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <FormControl fullWidth className="form-group">
        <TextField
          label="Заголовок статьи"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth className="form-group">
        <TextField
          label="Описание статьи"
          value={articleDescription}
          onChange={(e) => setArticleDescription(e.target.value)}
          required
          multiline
          minRows={4}
        />
      </FormControl>

      <Box className="form-group">
        <Typography>Уровень заработной платы</Typography>
        <Box className="slider-box">
          <Slider
            getAriaLabel={() => 'Offer range'}
            value={offer}
            onChange={handleChangeOffer}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={500000}
          />
        </Box>
      </Box>

      <Box className="form-actions">
        <Link to={HOME_PATH} className="back-link">
          <Button type="button" className="cancel-button">Отмена</Button>
        </Link>
        <Button type="button" className="draft-button">Сохранить черновик</Button>
        <Button type="submit" className="create-button">Создать</Button>
      </Box>
    </Box>
  );
};

export default CreateInterview;