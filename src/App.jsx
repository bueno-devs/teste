import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([{ title: 'jogar', status: true }])

  const handleSubmit = event => {
    event.preventDefault()
    const newTasks = [...tasks]
    newTasks.push({ title: input, status: false })
    setTasks(newTasks)
    setInput('')
  }

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleTaskChange = task => {
    const index = tasks.findIndex(item => item.title === task.title)
    const newTasks = [...tasks].toSpliced(index, 1)
    newTasks.push(task)
    setTasks(newTasks)
  }

  return (
    <main className="container">
      <article>
        <Header />
        <form role="group" onSubmit={handleSubmit}>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">+</button>
        </form>
        <section>
          <TaskList
            handleTaskChange={handleTaskChange}
            tasks={tasks.filter(task => task.status === false)}
          />
        </section>
        <footer>
          <TaskList
            handleTaskChange={handleTaskChange}
            tasks={tasks.filter(task => task.status === true)}
          />
        </footer>
      </article>
    </main>
  )
}

export default App
