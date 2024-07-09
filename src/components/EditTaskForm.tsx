import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { updateTask, Status } from '../store/reducers';
import { Box, Button, Container, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const statusOptions: Record<Status, Status[]> = {
    [Status.ToDo]: [Status.InProgress],
    [Status.InProgress]: [Status.Blocked, Status.InQA],
    [Status.Blocked]: [Status.ToDo],
    [Status.InQA]: [Status.ToDo, Status.Done],
    [Status.Done]: [Status.Deployed],
    [Status.Deployed]: []
};

const EditTaskForm: React.FC = () => {
    const { taskId } = useParams<{ taskId: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const task = useSelector((state: RootState) => state.tasks.find(task => task.id === taskId));

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<Status>(Status.ToDo);
    const [availableStatusOptions, setAvailableStatusOptions] = useState<Status[]>([]);

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
            setAvailableStatusOptions(statusOptions[task.status]);
        } else {
            navigate('/');
        }
    }, [task, navigate]);

    useEffect(() => {
        if (task) {
            setAvailableStatusOptions(statusOptions[task.status]);
        }
    }, [status, task]);

    const handleSubmit = () => {
        if (task) {
            const updatedTask = { ...task, title, description, status };
            dispatch(updateTask(updatedTask));
            navigate('/');
        }
    };

    const handleStatusChange = (event: SelectChangeEvent<Status>) => {
        setStatus(event.target.value as Status);
    };

    return (
        <Container style={{ padding: '0 35px' }}>
            <Typography style={{ fontSize: '18px', margin: '20px 0 15px', fontWeight: '400' }} gutterBottom>
                Edit Task
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
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
                    rows={24}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ flexGrow: 1, overflowY: 'auto' }}
                />
                <FormControl variant="filled" size="small" fullWidth>
                    <InputLabel id="status-select-label">Status</InputLabel>
                    <Select
                        labelId="status-select-label"
                        value={status}
                        onChange={handleStatusChange}
                    >
                        {availableStatusOptions.map((statusOption) => (
                            <MenuItem key={statusOption} value={statusOption}>
                                {statusOption}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, my: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        startIcon={<EditIcon />}
                        style={{ padding: '15px', fontSize: '10px', width: '100%' }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => navigate('/')}
                        style={{ padding: '15px', fontSize: '10px', width: '100%' }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EditTaskForm;