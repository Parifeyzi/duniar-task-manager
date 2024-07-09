import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, Status } from '../store/reducers';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: Status.ToDo,
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
  };

  return (
    <Container style={{ padding: '0 35px' }}>
      <Typography style={{ fontSize: '18px', margin: '20px 0 15px', fontWeight: '400' }} gutterBottom>
        Add a new Task
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Title"
          variant="filled"
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="filled"
          size="small"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleSubmit}
          fullWidth
          style={{ padding: '15px', fontSize: '10px' }}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default TaskForm;
