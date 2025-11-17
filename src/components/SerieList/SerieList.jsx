import React, { useState } from 'react'

function SerieList({ series, onDeleteSerie, onEditSerie, onCreateNewSerie }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredSeries = series.filter((serie) => {
    if (!searchTerm.trim()) return true

    const normalizedTerm = searchTerm.toLowerCase()

    return (
      serie.titulo.toLowerCase().includes(normalizedTerm) ||
      serie.categoria.toLowerCase().includes(normalizedTerm)
    )
  })

  if (series.length === 0) {
    return (
      <section>
        <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Lista de séries</h1>
        <p style={{ textAlign: 'center', marginTop: '16px' }}>
          Nenhuma série cadastrada até o momento.
        </p>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button type="button" onClick={onCreateNewSerie}>
            Cadastrar nova série
          </button>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Lista de séries</h1>

      <div style={{ textAlign: 'center', marginTop: '16px', marginBottom: '16px' }}>
        <label htmlFor="busca">
          Buscar por título ou categoria:{' '}
          <input
            id="busca"
            type="text"
            value={searchTerm}
            onChange={handleChangeSearch}
          />
        </label>
      </div>

      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          textAlign: 'center'
        }}
      >
        {filteredSeries.map((serie) => (
          <li key={serie.id} style={{ marginBottom: '8px' }}>
            - {serie.titulo} - {serie.numeroTemporadas} temporadas - {serie.dataLancamento} -{' '}
            {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.dataAssistiu}{' '}
            <button type="button" onClick={() => onEditSerie(serie.id)}>
              Editar
            </button>{' '}
            <button type="button" onClick={() => onDeleteSerie(serie.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>

      {/* botão centralizado abaixo da lista, igual ao print */}
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <button type="button" onClick={onCreateNewSerie}>
          Cadastrar nova série
        </button>
      </div>
    </section>
  )
}

export default SerieList
