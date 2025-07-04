import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import type { ITask } from "@/utils/taskType";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import {
  deleteTask,
  toggleCompletedState,
} from "@/redux/features/tasks/tasksSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox onClick={() => dispatch(toggleCompletedState(task.id))} />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
