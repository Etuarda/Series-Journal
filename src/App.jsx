import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CreateSeriePage from './pages/CreateSeriePage.jsx'
import SerieListPage from './pages/SerieListPage.jsx'

const initialSeries = [
  {
    id: 1,
    titulo: 'La Casa de Papel',
    numeroTemporadas: 3,
    dataLancamento: '2020-05-20',
    diretor: 'Álex Pina',
    produtora: 'Netflix',
    categoria: 'Drama',
    dataAssistiu: '2021-05-10'
  },
  {
    id: 2,
    titulo: 'Breaking Bad',
    numeroTemporadas: 5,
    dataLancamento: '2008-01-22',
    diretor: 'Vince Gilligan',
    produtora: 'Sony Pictures',
    categoria: 'Drama',
    dataAssistiu: '2015-01-20'
  },
  {
    id: 3,
    titulo: 'Friends',
    numeroTemporadas: 10,
    dataLancamento: '1994-09-22',
    diretor: 'Kevin S. Bright',
    produtora: 'Warner Bros',
    categoria: 'Comédia',
    dataAssistiu: '2010-10-10'
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [series, setSeries] = useState(initialSeries)
  const [editingSerie, setEditingSerie] = useState(null)

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const handleAddSerie = (novaSerie) => {
    setSeries((previousSeries) => {
      const lastId =
        previousSeries.length > 0
          ? previousSeries[previousSeries.length - 1].id
          : 0

      return [
        ...previousSeries,
        {
          ...novaSerie,
          id: lastId + 1
        }
      ]
    })
  }

  const handleUpdateSerie = (serieAtualizada) => {
    setSeries((previousSeries) =>
      previousSeries.map((serie) =>
        serie.id === serieAtualizada.id ? serieAtualizada : serie
      )
    )
  }

  const handleDeleteSerie = (id) => {
    setSeries((previousSeries) =>
      previousSeries.filter((serie) => serie.id !== id)
    )
  }

  const handleStartEdit = (id) => {
    const serieParaEditar = series.find((serie) => serie.id === id)
    if (!serieParaEditar) return

    setEditingSerie(serieParaEditar)
    setCurrentPage('create')
  }

  const handleFinishEdit = () => {
    setEditingSerie(null)
  }

  // usado pelo botão "Cadastrar nova série"
  const handleCreateNewSerieFromList = () => {
    setEditingSerie(null)
    setCurrentPage('create')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'create':
        return (
          <CreateSeriePage
            onAddSerie={handleAddSerie}
            onUpdateSerie={handleUpdateSerie}
            editingSerie={editingSerie}
            onFinishEdit={handleFinishEdit}
          />
        )
      case 'list':
        return (
          <SerieListPage
            series={series}
            onDeleteSerie={handleDeleteSerie}
            onEditSerie={handleStartEdit}
            onCreateNewSerie={handleCreateNewSerieFromList}
          />
        )
      default:
        return <HomePage />
    }
  }

  return (
    <div>
      <NavBar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  )
}

export default App
