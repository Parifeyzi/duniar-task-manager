import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box, Typography, Paper, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const navigate = useNavigate();

  const handleEdit = (taskId: string) => {
    navigate(`/edit/${taskId}`);
  };

  return (
    <Box sx={{ height: '100%' }}>
      {tasks.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Typography sx={{ fontSize: '18px', textAlign: 'center' }}>
            You have nothing to do.
            <br />
            Go get some sleep.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2} sx={{ maxHeight: '600px', overflowY: 'auto' }}>
          {tasks.map((task) => (
            <Grid item xs={6} key={task.id}>
              <Paper sx={{ border: '1px solid lightblue', borderRadius: '6px', padding: '15px 15px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '200px' }}>
                <Box>
                  <Typography style={{fontSize: '15px', fontWeight: '600', marginBottom: '5px'}}>{task.title}</Typography>
                  <Box sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: '90px' }}>
                    <Typography style={{fontSize: '12px'}}>{task.description}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography style={{backgroundColor: '#1775B9', padding: '5px 30px', borderRadius: '6px', color: '#ffffff', fontSize: '12px'}}>{task.status}</Typography>
                  <IconButton aria-label="edit" onClick={() => handleEdit(task.id)}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TaskList;
