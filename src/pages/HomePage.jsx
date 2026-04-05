import { Link } from 'react-router-dom'
import { Box, Button, Container, Fade, Paper, Typography } from '@mui/material'
import './HomePage.css'

function HomePage() {
  return (
    <Container maxWidth="lg" className="home-page-container">
      <Fade in timeout={1200}>
        <Paper className="home-page-paper">
          <Box className="home-page-top-bar" />
          <Typography variant="h2" gutterBottom className="home-page-title">
            Pagina Inicial
          </Typography>
          <Typography variant="h5" className="home-page-heading">
            Bem-vindo ao projeto CRUD de series!
          </Typography>
          <Typography variant="body1" className="home-page-body">
            Gerencie series assistidas de uma forma facil e intuitiva.
          </Typography>
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
