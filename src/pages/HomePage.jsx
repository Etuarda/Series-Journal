import { Link } from 'react-router-dom'
import { Box, Button, Container, Fade, Paper, Typography } from '@mui/material'
import { Server } from 'lucide-react'
import './HomePage.css'

function HomePage() {
  return (
    <Container maxWidth="lg" className="home-page-container">
      <Fade in timeout={1200}>
        <Paper className="home-page-paper">
          <Box className="home-page-top-bar" />
          <Typography variant="overline" className="home-page-project-label">
            Projeto acadêmico · Fase 2
          </Typography>
          <Typography variant="h2" gutterBottom className="home-page-title">
            Série Journal
          </Typography>
          <Typography variant="h5" className="home-page-heading">
            CRUD de séries para Desenvolvimento de Sistemas Frontend
          </Typography>
          <Typography variant="body1" className="home-page-body">
            Organize as séries que você assistiu: consulte, cadastre, edite e remova registros.
          </Typography>
          <Box className="home-page-api-note" role="note">
            <Server size={20} aria-hidden="true" />
            <Box>
              <Typography className="home-page-api-title">Conecte a API REST</Typography>
              <Typography className="home-page-api-copy">
                Inicie a API em <code>http://localhost:5000</code> para salvar as alterações.
                Sem conexão, são exibidos apenas dados de demonstração e nada será persistido.
              </Typography>
            </Box>
          </Box>
          <Box className="home-page-actions">
            <Button
              component={Link}
              to="/series"
              variant="contained"
              fullWidth
              className="home-page-primary-button"
            >
              Ver Lista
            </Button>
            <Button
              component={Link}
              to="/create"
              variant="outlined"
              fullWidth
              className="home-page-secondary-button"
            >
              Novo Cadastro
            </Button>
          </Box>
        </Paper>
      </Fade>
    </Container>
  )
}

export default HomePage
