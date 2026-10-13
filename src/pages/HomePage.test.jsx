import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage.jsx'

describe('HomePage', () => {
  it('identifica o projeto acadêmico e informa a necessidade da API', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    expect(screen.getByText(/projeto acadêmico/i)).toBeInTheDocument()
    expect(screen.getByText(/conecte a api rest/i)).toBeInTheDocument()
    expect(screen.getByText(/http:\/\/localhost:5000/i)).toBeInTheDocument()
    expect(screen.getByText(/nada será persistido/i)).toBeInTheDocument()
  })
})