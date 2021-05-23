import { createSlice } from '@reduxjs/toolkit';

export const tasksDataSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addNewTask: (state, action) => {
      const newTask = action.payload;
      let curTaskList = [...state];
      curTaskList.push(newTask);
      return curTaskList;
    },
    markTaskCompleted: (state, action) => {
      const existingTaskList = [...state];
      const updatedList = existingTaskList.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            id: task.id,
            task: task.task,
            completed: true,
          }
        }
        return task;
      });
      return updatedList;
    },
  },
  extraReducers: {},
});
