import React from 'react'
import { ITask } from '../interfaces';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';


interface Props {
    task: ITask;
    completeTask(taskNameToDelete: String): void;
}

const TodoTask = ({ task, completeTask } : Props) => {  
  return (
        <div>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>   
            <List >
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => {
                        completeTask(task.taskName);
                    }}>
                      <DeleteIcon  />
                    </IconButton>
                  }
                >
                
                <ListItemText
                    primary={task?.taskName}
                    secondary={task?.deadline}
                  />
                  
                </ListItem>
                
            </List>
            </Box>
        </div>
    )
}

export default TodoTask;