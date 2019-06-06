export interface ITask {
    taskID:number,
    todoID: number,
    taskName: string,
    taskDescription: string,
    taskCreationDate: Date,
    taskDeadlineDate: Date,
    status: string
}