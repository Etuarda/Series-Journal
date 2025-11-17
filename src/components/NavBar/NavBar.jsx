import React from 'react'

function NavBar({ onNavigate }) {
  const handleClick = (event, page) => {
    event.preventDefault()
    onNavigate(page)
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="#home" onClick={(event) => handleClick(event, 'home')}>
            Página Inicial
          </a>
        </li>
        <li>
          <a href="#about" onClick={(event) => handleClick(event, 'about')}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#create" onClick={(event) => handleClick(event, 'create')}>
            Cadastrar Séries
          </a>
        </li>
        <li>
          <a href="#list" onClick={(event) => handleClick(event, 'list')}>
            Lista de Séries
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
