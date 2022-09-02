import React from "react";
import { Task } from "./types";

export function updateFilter(text: string, setFilter: React.Dispatch<string>) {
    setFilter(text);
}

export const updateTasks = (input: string, setTasks: React.Dispatch<Task[]>, tasks: Task[]) => {
    setTasks([...tasks, { text: input, complete: false, id: Math.random() }]
    ); console.log(input);
};

export const checkDone = (id: number, tasks: Task[], setTasks: React.Dispatch<Task[]>) => {
    const updatedTasks = tasks.map(task => {
        if (task.id === id) {
            task.complete = !task.complete;
        }
        return task;
    });
    setTasks(updatedTasks);
};

export const uncheckAll = (tasks: Task[], setTasks: React.Dispatch<Task[]>) => {
    const updatedTasks = tasks.map(task => {
        task.complete = false;
        return task;
    });
    setTasks(updatedTasks);
};

export const removeTask = (id: number, tasks: Task[], setTasks: React.Dispatch<Task[]>) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
};
