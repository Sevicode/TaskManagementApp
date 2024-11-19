import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { ITask } from "../../Interfaces/Interface";
import TodoList from "../TodoList/TodoList";
import { symlink } from "fs";

function TaskItem() {
  const [task, setTask] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "startDate") {
      setStartDate(event.target.value);
    } else {
      setEndDate(event.target.value);
    }
  };

  const addTask = (): void => {
    if (!task.trim() || !startDate.trim() || !endDate.trim()) {
      alert("Please fill in all the fields before adding a task.");
      return;
    }
    const newTask = { taskName: task, startDate: startDate, endDate: endDate };
    setTodoList([...todoList, newTask]);
    setTask("");
    setStartDate("");
    setEndDate("");
  };

  const editTask = (taskToEdit: ITask, updatedTask: ITask): void => {
    setTodoList(
      todoList.map((task) =>
        task.taskName === taskToEdit.taskName &&
        task.startDate === taskToEdit.startDate &&
        task.endDate === taskToEdit.endDate
          ? { ...task, ...updatedTask }
          : task
      )
    );
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFF7FA",
      }}
    >
      {/* Input Fields */}
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        sx={{ py: 4, flexShrink: 0 }}
      >
        <TextField
          label="Task"
          variant="outlined"
          name="task"
          value={task}
          onChange={handleChange}
          sx={{ backgroundColor: "#fff" }}
        />
        <TextField
          label="Start Date"
          name="startDate"
          variant="outlined"
          value={startDate}
          onChange={handleChange}
          sx={{ backgroundColor: "#fff" }}
        />
        <TextField
          label="End Date"
          name="endDate"
          variant="outlined"
          value={endDate}
          onChange={handleChange}
          sx={{ backgroundColor: "#fff" }}
        />
        <Button
          variant="contained"
          onClick={addTask}
          sx={{ backgroundColor: "#FF03A9" }}
        >
          Add Task
        </Button>
      </Stack>

      <TableContainer component={Paper} sx={{ width: "80%", mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {todoList.map((task, index) => (
              <TodoList
                key={index}
                task={task}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TaskItem;
