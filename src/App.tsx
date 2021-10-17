import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import { ITask } from './interfaces';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TodoTask from './Components/TodoTask';


const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task")
    {
      setTask(event.target.value);
    }
    else
    {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    let prefix = ""
    if (deadline > 1)
    {
      prefix = " days";
    }
    else
    {
      prefix = " day";
    }

    const newTask = 
                  {
                    taskName: task,
                    deadline: deadline + prefix,
                  }
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    console.log(todoList);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList((todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    })))

  }
  return (
    <div className="App">
     <div className="header">
       <Box
       sx={{ p: 10, display :'center'}}>
       <Stack direction="row" spacing={3}>
       <Stack spacing={2}>
        <TextField id="task" label="Task..." variant="filled" name = "task" onChange = {handleChange} value = {task} />
        <TextField type="number" id="deadline" label="Deadline (in Days) ..." variant="filled" name = "deadline" onChange = {handleChange} value = {deadline}/>
        </Stack>
        <Button variant="contained" color="secondary" onClick={addTask}>
          Add Task
        </Button>
       </Stack>
       </Box>
       </div>
     <div className="todoList">
       {todoList.map((task: ITask, key: number) => {
         return <TodoTask key={key} task= {task} completeTask={completeTask}/>
       })}
     </div>
    </div>
  );
}

export default App;
