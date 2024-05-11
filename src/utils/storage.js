const TASKS = 'TASKS'

export function saveTasks(tasks) {
  const str = JSON.stringify(tasks)
  localStorage.setItem(TASKS, str)
}

export function getTasks() {
  const str = localStorage.getItem(TASKS)
  return JSON.parse(str) || []
}
