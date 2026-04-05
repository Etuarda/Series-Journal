import React from 'react'
import SerieList from '../components/SerieList/SerieList.jsx'

function SerieListPage({ series, onDeleteSerie, onEditSerie, isOffline }) {
  return (
    <main>
      <SerieList
        series={series}
        onDeleteSerie={onDeleteSerie}
        onEditSerie={onEditSerie}
        isOffline={isOffline}
      />
    </main>
  )
}

export default SerieListPage
