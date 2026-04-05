import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SerieList from './SerieList.jsx'

const mockSeries = [
  {
    id: 1,
    titulo: 'Breaking Bad',
    numeroTemporadas: 5,
    categoria: 'Drama',
    dataAssistiu: '2015-01-20'
  },
  {
    id: 2,
    titulo: 'Dark',
    numeroTemporadas: 3,
    categoria: 'Sci-Fi',
    dataAssistiu: '2020-06-10'
  }
]

describe('SerieList', () => {
  it('filtra a listagem ao buscar por titulo', async () => {
    const user = userEvent.setup()

    render(
      <SerieList
        series={mockSeries}
        isOffline={false}
        onDeleteSerie={() => {}}
        onEditSerie={() => {}}
      />
    )

    const searchInput = screen.getByPlaceholderText(/procurar obra/i)
    await user.type(searchInput, 'dark')

    expect(screen.getByText(/dark/i)).toBeInTheDocument()
    expect(screen.queryByText(/breaking bad/i)).not.toBeInTheDocument()
  })
})
