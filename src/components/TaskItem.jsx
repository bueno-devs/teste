function TaskItem(props) {
  const { task, handleTaskChange } = props

  const handleChange = event => {
    handleTaskChange({ ...task, status: event.target.checked })
  }
  return (
    <label>
      <input
        type="checkbox"
        name={task.title}
        checked={task.status}
        onChange={handleChange}
      />
      {task.title}
    </label>
  )
}

export default TaskItem
