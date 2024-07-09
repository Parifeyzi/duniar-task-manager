import React from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { Box, Typography, Grid } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Grid container justifyContent="center" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Header breadcrumb="Home" />
          <Box sx={{ flexShrink: 0 }}>
            <TaskForm />
          </Box>
          <Box sx={{ mt: 4, flexGrow: 1, display: 'flex', backgroundColor: '#1775B9', flexDirection: 'column', borderRadius: '16px 16px 0 0' }}>
            <Typography sx={{ backgroundColor: '#1775B9', color: 'white', padding: '20px 35px', borderRadius: '16px 16px 0 0' }}>
              Tasks
            </Typography>
            <Box sx={{ flexGrow: 1, borderRadius: '16px', border: '1px solid lightblue', backgroundColor: '#A2CEED', padding: '16px', overflowY: 'auto' }}>
              <TaskList />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
