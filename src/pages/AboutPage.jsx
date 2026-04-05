import { Box, Container, Fade, Paper, Typography } from '@mui/material'
import { Star, Ticket } from 'lucide-react'
import './AboutPage.css'

function AboutPage() {
  return (
    <Container maxWidth="md" className="about-page-container">
      <Fade in timeout={1000}>
        <Paper className="about-page-paper">
          <Typography variant="h4" gutterBottom className="about-page-title">
            Sobre o Projeto
          </Typography>
          <Typography variant="body1" className="about-page-body">
            Este e um projeto de gerenciamento de series assistidas desenvolvido com React
            para a disciplina Desenvolvimento de Sistemas Frontend. Aqui voce pode
            cadastrar, visualizar, editar e excluir series assistidas.
          </Typography>
          <Box className="about-page-icons">
            <Ticket size={24} className="about-page-icon" />
            <Star size={24} className="about-page-icon" />
            <Ticket size={24} className="about-page-icon" />
          </Box>
        </Paper>
      </Fade>
    </Container>
  )
}

export default AboutPage
