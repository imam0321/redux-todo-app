import TaskCard from "@/components/TaskCard/TaskCard";
import { selectTasks } from "@/redux/features/tasks/tasksSlice";
import { useAppSelector } from "@/redux/hooks";


const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-5xl px-5 mt-16">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        {
          tasks.map(task => <TaskCard key={task.id} task={task}/>)
        }
        
      </div>
    </div>
  );
};

export default Tasks;