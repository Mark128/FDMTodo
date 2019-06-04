export interface ITask {
    todoID: number,
    taskName: string,
    taskDescription: string,
    taskCreationDate: Date,
    taskDeadlineDate: Date,
    status: string
}