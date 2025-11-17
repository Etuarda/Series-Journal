import React from 'react'
import SerieList from '../components/SerieList/SerieList.jsx'

function SerieListPage({ series, onDeleteSerie, onEditSerie }) {
  return (
    <main>
      <SerieList series={series} onDeleteSerie={onDeleteSerie} onEditSerie={onEditSerie} />
    </main>
  )
}

export default SerieListPage
