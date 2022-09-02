import React from "react"

export interface Task {
    id: number
    complete: boolean
    text: string
}

export interface AppProps {
    setTasks?: React.Dispatch<Task[]>
    tasks?: Task[]
    setFilter?: React.Dispatch<string>
    task?:Task
    displayTasks?: ()=>(Task[])
}