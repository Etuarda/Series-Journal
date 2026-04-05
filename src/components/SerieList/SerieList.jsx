import { useState } from 'react'
import {
  Alert,
  Box,
  Card,
  CardContent,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material'
import { Edit3, Heart, Search, Star, Trash2 } from 'lucide-react'
import './SerieList.css'

function SuitIcon({ type }) {
  const icons = {
    heart: <Heart size={16} className="serie-list-icon-heart" />,
    spade: <Star size={16} className="serie-list-icon-spade" />
  }
  return icons[type] || null
}

function SerieList({ series, onDeleteSerie, onEditSerie, isOffline }) {
  const [search, setSearch] = useState('')

  const filtered = series.filter(
    (serie) =>
      serie.titulo.toLowerCase().includes(search.toLowerCase()) ||
      serie.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Box className="serie-list-root">
      {isOffline && (
        <Alert severity="warning" className="serie-list-offline-alert">
          <b>MODO OFFLINE:</b> Servidor nao detectado. Exibindo dados de demonstracao.
        </Alert>
      )}

      <Box className="serie-list-header-wrap">
        <Box>
          <Typography variant="h4" gutterBottom className="serie-list-main-title">
            O Catálogo 
          </Typography>
          <Typography variant="caption" className="serie-list-header-caption">
            Curadoria Exclusiva • Maratona em Dia
          </Typography>
        </Box>
        <TextField
          placeholder="PROCURAR OBRA..."
          variant="standard"
          fullWidth
          onChange={(event) => setSearch(event.target.value)}
          className="serie-list-search-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} className="serie-list-icon-search" />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {filtered.map((serie) => (
          <Grid item xs={12} sm={6} md={4} key={serie.id}>
            <Fade in timeout={800}>
              <Card className="serie-list-card">
                <CardContent className="serie-list-card-content">
                  <Box className="serie-list-card-top">
                    <SuitIcon type="heart" />
                    <Typography variant="caption" className="serie-list-id-caption">
                      #{serie.id}
                    </Typography>
                  </Box>
                  <Typography variant="h5" align="center" className="serie-list-title">
                    {serie.titulo}
                  </Typography>
                  <Box className="serie-list-info-wrap">
                    <Typography variant="caption" className="serie-list-category-caption">
                      CATEGORIA: {serie.categoria}
                    </Typography>
                    <Typography variant="caption">TEMPORADAS: {serie.numeroTemporadas}</Typography>
                  </Box>
                  <Box className="serie-list-seen-wrap">
                    <Typography variant="caption" className="serie-list-seen-caption">
                      VISTO EM: {new Date(serie.dataAssistiu).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardContent>
                <Box className="serie-list-actions-wrap">
                  <IconButton color="secondary" size="small" onClick={() => onEditSerie(serie.id)}>
                    <Edit3 size={16} />
                  </IconButton>
                  <IconButton color="error" size="small" onClick={() => onDeleteSerie(serie.id)}>
                    <Trash2 size={16} />
                  </IconButton>
                </Box>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {filtered.length === 0 && (
        <Typography align="center" className="serie-list-empty-text">
          Nenhuma serie encontrada.
        </Typography>
      )}
    </Box>
  )
}

export default SerieList
