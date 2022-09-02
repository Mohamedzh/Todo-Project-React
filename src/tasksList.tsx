import React from "react";
import TasKDetails from "./task";
import { AppProps, Task } from "./types";

const TasksList = ({ displayTasks, tasks, setTasks }: AppProps) => {
	return (
		<ul className="mt-5">
			{displayTasks && displayTasks().length > 0 ?
				displayTasks().map((task: Task) => (
					<TasKDetails task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
				)) :
				<h3 className="text-center">You have no tasks...</h3>
			}
		</ul>
	);
};

export default TasksList;
