import React, { ChangeEvent, useState } from "react";
import { IProps } from "../../Interfaces/Interface";
import {
  Box,
  Button,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function TodoList({ task, editTask, deleteTask }: IProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEditChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSave = () => {
    editTask(task, updatedTask);
    setIsEditing(false);
  };

  return isEditing ? (
    <TableRow>
      <TableCell>
        <TextField
          name="taskName"
          value={updatedTask.taskName}
          onChange={handleEditChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="startDate"
          value={updatedTask.startDate}
          onChange={handleEditChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="endDate"
          value={updatedTask.endDate}
          onChange={handleEditChange}
        />
      </TableCell>
      <TableCell>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </TableCell>
    </TableRow>
  ) : (
    <TableRow>
      <TableCell>{task.taskName}</TableCell>
      <TableCell>{task.startDate}</TableCell>
      <TableCell>{task.endDate}</TableCell>
      <TableCell>
        <Button onClick={() => setIsEditing(true)} variant="outlined">
          Edit
        </Button>
        <Button
          onClick={() => deleteTask(task.taskName)}
          variant="contained"
          color="error"
          sx={{ ml: 1, backgroundColor: "#FF03A9" }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TodoList;
