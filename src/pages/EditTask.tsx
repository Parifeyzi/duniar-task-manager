import React from 'react';
import Header from '../components/Header';
import EditTaskForm from '../components/EditTaskForm';
import { Grid, Box } from '@mui/material';

const EditTask: React.FC = () => {
  return (
    <Grid container justifyContent="center" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Header breadcrumb="Edit" />
          <EditTaskForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditTask;
