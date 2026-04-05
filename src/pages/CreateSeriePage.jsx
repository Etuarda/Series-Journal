import React from 'react'
import SerieForm from '../components/SerieForm/SerieForm.jsx'

function CreateSeriePage({ isOffline }) {
  return (
    <main>
      <SerieForm isOffline={isOffline} />
    </main>
  )
}

export default CreateSeriePage
