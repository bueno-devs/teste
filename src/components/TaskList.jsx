import TaskItem from './TaskItem'

function TaskList(props) {
  const { tasks, handleTaskChange } = props

  return (
    <fieldset>
      {tasks.map(task => {
        if (task.status)
          return (
            <s key={task.title}>
              <TaskItem handleTaskChange={handleTaskChange} task={task} />
            </s>
          )
        else
          return (
            <TaskItem
              handleTaskChange={handleTaskChange}
              key={task.title}
              task={task}
            />
          )
      })}
    </fieldset>
  )
}

export default TaskList
