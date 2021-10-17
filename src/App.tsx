import React, {FC} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const App: FC = () => {
  return (
    <div className="App">
     <div className="header">
       <div className="inputContainer">
       <Box
       sx={{ p: 2, border: '1px dashed grey', backgroundColor : '#A6B6DB'}}>
       <Stack direction="row" spacing={3}>
       <Stack spacing={2}>
        <TextField id="task" label="Task..." variant="filled" />
        <TextField type="number" id="deadline" label="Deadline (in Days) ..." variant="filled" />
        </Stack>
        <Button variant="contained" color="success">
          Add Task
        </Button>
       </Stack>
       </Box>
       </div>
       </div>
     <div className="todoList"></div>
    </div>
  );
}

export default App;
