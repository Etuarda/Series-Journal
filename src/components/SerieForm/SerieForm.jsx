import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import './SerieForm.css'

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

function SerieForm({ isOffline }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    titulo: '',
    numeroTemporadas: '',
    dataLancamento: '',
    diretor: '',
    produtora: '',
    categoria: '',
    dataAssistiu: ''
  })

  useEffect(() => {
    if (id) {
      if (isOffline) {
        const localMatch = MOCK_DATA.find((serie) => serie.id === Number.parseInt(id, 10))
        if (localMatch) {
          setFormData(localMatch)
        }
      } else {
        axios
          .get(`${API_URL}/${id}`)
          .then((response) => setFormData(response.data))
          .catch((error) => console.error(error))
      }
    }
  }, [id, isOffline])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const payload = { ...formData, numeroTemporadas: Number(formData.numeroTemporadas) }

    try {
      if (isOffline) {
        setTimeout(() => navigate('/series'), 500)
      } else {
        if (id) {
          await axios.put(API_URL, { ...payload, id: Number.parseInt(id, 10) })
        } else {
          await axios.post(API_URL, payload)
        }
        navigate('/series')
      }
    } catch (error) {
      navigate('/series')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="sm" className="serie-form-container">
      <Paper className="serie-form-paper">
        <Typography variant="h4" align="center" className="serie-form-title">
          {id ? 'Editar Registo' : 'Novo Registro'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="TITULO"
                fullWidth
                required
                variant="standard"
                value={formData.titulo}
                onChange={(event) => setFormData({ ...formData, titulo: event.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="TEMPORADAS"
                type="number"
                fullWidth
                required
                variant="standard"
                value={formData.numeroTemporadas}
                onChange={(event) =>
                  setFormData({ ...formData, numeroTemporadas: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CATEGORIA"
                fullWidth
                required
                variant="standard"
                value={formData.categoria}
                onChange={(event) => setFormData({ ...formData, categoria: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="LANCAMENTO"
                type="date"
                fullWidth
                required
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={formData.dataLancamento}
                onChange={(event) =>
                  setFormData({ ...formData, dataLancamento: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="DIRETOR"
                fullWidth
                required
                variant="standard"
                value={formData.diretor}
                onChange={(event) => setFormData({ ...formData, diretor: event.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="PRODUTORA"
                fullWidth
                required
                variant="standard"
                value={formData.produtora}
                onChange={(event) => setFormData({ ...formData, produtora: event.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="DATA EM QUE ASSISTIU"
                type="date"
                fullWidth
                required
                variant="standard"
                InputLabelProps={{ shrink: true }}
                value={formData.dataAssistiu}
                onChange={(event) =>
                  setFormData({ ...formData, dataAssistiu: event.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} className="serie-form-actions-grid">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                className="serie-form-submit-button"
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Confirmar Registro'}
              </Button>
              <Button onClick={() => navigate('/series')} fullWidth className="serie-form-cancel-button">
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default SerieForm
