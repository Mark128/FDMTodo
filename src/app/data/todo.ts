import { ITask } from "./task";

export interface ITODO {
    id: number,
    title: string,
    description: string,
    status: string,
    dateOfCreation: Date 
    dateOfCompletion?: Date,
    dueDate?: Date,
    tasks?: ITask[]  
}

