import { Card, CardContent, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Form from './Form'
import Tasks from './Tasks'

const CardContainer = ({name}) => {
    const [tasks, setTasks] = useState([])

  return (
    <div className="glass">
      <Typography variant="h6" >
        {name}
      </Typography>
        <Form tasks={tasks} setTasks={setTasks}/>
        <Tasks tasks={tasks}/>
    </div>

  )
}

export default CardContainer
