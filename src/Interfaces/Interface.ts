export interface ITask {
  taskName: string;
  startDate: string;
  endDate: string;
}

export interface IProps {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
  editTask(taskToEdit: ITask, updatedTask: ITask): void;
}
