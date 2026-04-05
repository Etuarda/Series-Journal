import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SerieForm from './SerieForm.jsx'

describe('SerieForm', () => {
  it('renderiza todos os campos obrigatorios', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SerieForm isOffline />
      </MemoryRouter>
    )

    expect(screen.getByLabelText(/titulo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/temporadas/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/categoria/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/lancamento/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/diretor/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/produtora/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/data em que assistiu/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /confirmar registro/i })).toBeInTheDocument()
  })
})
