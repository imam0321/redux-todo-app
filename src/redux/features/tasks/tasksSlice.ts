import type { RootState } from "@/redux/store";
import type { ITask } from "@/utils/taskType";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
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
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "High" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};

export const { addTask, toggleCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
