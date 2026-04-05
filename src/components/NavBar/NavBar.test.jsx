import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './NavBar.jsx'

describe('NavBar', () => {
  it('renderiza os links principais de navegacao', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <NavBar />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cadastrar/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /lista de series/i })).toBeInTheDocument()
  })
})
