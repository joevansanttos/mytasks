import React from "react";
import { Home } from "../pages/Home";

interface IProps{
    children: React.ReactElement;
}

export interface ITasksContext{
    id: string;
    title: string;
    addTask(): void;
}

export const TasksContext = React.createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
    const addTask = () => {
        console.log('addTask action')
    }
    return (
        <TasksContext.Provider value={{id: '1', title: 'Task 01', addTask}}>
            {children}
        </TasksContext.Provider>
    );
}