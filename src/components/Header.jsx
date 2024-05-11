function Header() {
  return (
    <header>
      <nav>
        <h1>Tarefas</h1>
        <ul>
          <li>
            <button>{'<'}</button>
          </li>
          <li>
            <hgroup>
              <h3>Hoje</h3>
              <p>{new Date().toLocaleDateString()}</p>
            </hgroup>
          </li>
          <li>
            <button>{'>'}</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
