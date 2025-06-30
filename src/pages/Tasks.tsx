import AddTaskModal from "@/components/AddTaskModal/AddTaskModal";
import TaskCard from "@/components/TaskCard/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-5xl px-5 mt-16">
      <div className="flex justify-end items-center gap-2">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              all
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
