import './App.css';
import { useState, useEffect } from 'react';
import TaskInput from './taskInput';
import Filters from './filters';
import TasksList from './tasksList';
import React from 'react';
import { Task } from './types';

function App() {
	const [tasks, setTasks] = useState<Task[]>(
		JSON.parse(localStorage.getItem('tasks') || "") || []
	);
	const [filter, setFilter] = useState<string>('ALL');

	function displayTasks() {
		switch (filter) {
			case 'COMPLETE':
				return tasks.filter(task => task.complete);
			case 'NON_COMPLETE':
				return tasks.filter(task => !task.complete);
			case 'ALL':
			default:
				return tasks;
		}
	}

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className='App d-flex flex-column align-content-center'>
			<h1 className='text-center my-5'>
				My ToDos List
			</h1>
			<TaskInput setTasks={setTasks} tasks={tasks} setFilter={setFilter} />
			<TasksList tasks={tasks} displayTasks={displayTasks} setTasks={setTasks} />
		</div>
	);
}

export default App;
