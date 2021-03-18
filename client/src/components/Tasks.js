import React from 'react'

const Tasks = ({tasks}) => {
    const tasks_list = tasks.map( t => (
    <div>
        <li key ={t.id}>
            {t}
        </li>
    </div>)
    )
  return (
    <div className="Tasks-container">
        <ul className="Tasks-list">
            {tasks_list}
        </ul>
    </div>
  )
}

export default Tasks
