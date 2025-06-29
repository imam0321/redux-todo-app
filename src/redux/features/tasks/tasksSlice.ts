import type { RootState } from "@/redux/store";
import type { ITask } from "@/utils/taskType";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "44652655",
      title: "Create front Page",
      description: "Create a user friendly front page",
      dueDate: "25-06-25",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "44652674",
      title: "Create github repo",
      description: "Create a github repository for front page",
      dueDate: "19-06-25",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
