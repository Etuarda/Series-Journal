import { useEffect, useState } from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import axios from 'axios'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider
} from '@mui/material'
import { AlertTriangle } from 'lucide-react'
import './App.css'
import theme from './theme'
import NavBar from './components/NavBar/NavBar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CreateSeriePage from './pages/CreateSeriePage.jsx'
import HomePage from './pages/HomePage.jsx'
import SerieListPage from './pages/SerieListPage.jsx'

const API_URL = 'http://localhost:5000/series'

const MOCK_DATA = [
  {
    id: 1,
    titulo: 'La Casa de Papel',
    numeroTemporadas: 3,
    dataLancamento: '2017-05-02',
    diretor: 'Álex Pina',
    produtora: 'Netflix',
    categoria: 'Drama',
    dataAssistiu: '2021-05-10'
  },
  {
    id: 2,
    titulo: 'Breaking Bad',
    numeroTemporadas: 5,
    dataLancamento: '2008-01-20',
    diretor: 'Vince Gilligan',
    produtora: 'Sony Pictures',
    categoria: 'Drama',
    dataAssistiu: '2015-01-20'
  },
  {
    id: 3,
    titulo: 'Fleabag',
    numeroTemporadas: 2,
    dataLancamento: '2016-07-21',
    diretor: 'Phoebe Waller-Bridge',
    produtora: 'BBC',
    categoria: 'Comedy/Drama',
    dataAssistiu: '2024-01-14'
  }
]

function AppContent() {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)
  const [isOffline, setIsOffline] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const navigate = useNavigate()

  const loadData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(API_URL, { timeout: 4000 })
      setSeries(response.data)
      setIsOffline(false)
    } catch (error) {
      setSeries(MOCK_DATA)
      setIsOffline(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleDeleteRequest = (id) => {
    setDeleteId(id)
    setOpenDeleteModal(true)
  }

  const handleConfirmDelete = async () => {
    if (deleteId) {
      try {
        if (!isOffline) {
          await axios.delete(`${API_URL}/${deleteId}`)
        }
        setSeries((previous) => previous.filter((item) => item.id !== deleteId))
      } catch (error) {
        console.error('Erro ao deletar:', error)
      }
    }
    setOpenDeleteModal(false)
    setDeleteId(null)
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/series"
          element={
            <Container maxWidth="lg">
              {loading ? (
                <Box className="app-loading-box">
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                <SerieListPage
                  series={series}
                  isOffline={isOffline}
                  onDeleteSerie={handleDeleteRequest}
                  onEditSerie={(id) => navigate(`/edit/${id}`)}
                />
              )}
            </Container>
          }
        />
        <Route path="/create" element={<CreateSeriePage isOffline={isOffline} />} />
        <Route path="/edit/:id" element={<CreateSeriePage isOffline={isOffline} />} />
      </Routes>

      <Dialog
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="app-delete-dialog-title">
          <AlertTriangle size={24} className="app-delete-alert-icon" />
          Confirmar Exclusao
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="app-delete-dialog-text">
            Tem certeza que deseja remover esta obra da sua colecao real? Esta acao nao podera
            ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="app-delete-dialog-actions">
          <Button onClick={() => setOpenDeleteModal(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} variant="contained" color="primary" autoFocus>
            Apagar Serie
          </Button>
        </DialogActions>
      </Dialog>

      {isOffline && (
        <Alert severity="warning" className="app-offline-alert">
          Modo offline ativo. Exibindo dados de demonstracao.
        </Alert>
      )}
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell">
        <Router>
          <AppContent />
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App
