import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Status {
  ToDo = 'ToDo',
  InProgress = 'InProgress',
  Blocked = 'Blocked',
  InQA = 'InQA',
  Done = 'Done',
  Deployed = 'Deployed'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
