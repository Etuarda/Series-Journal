import React from 'react'
import SerieForm from '../components/SerieForm/SerieForm.jsx'

function CreateSeriePage({ onAddSerie, onUpdateSerie, editingSerie, onFinishEdit }) {
  return (
    <main>
      <SerieForm
        onAddSerie={onAddSerie}
        onUpdateSerie={onUpdateSerie}
        editingSerie={editingSerie}
        onFinishEdit={onFinishEdit}
      />
    </main>
  )
}

export default CreateSeriePage
