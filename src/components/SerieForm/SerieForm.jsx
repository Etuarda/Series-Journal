import React, { useEffect, useState } from 'react'

const initialFormState = {
  titulo: '',
  numeroTemporadas: '',
  dataLancamento: '',
  diretor: '',
  produtora: '',
  categoria: '',
  dataAssistiu: ''
}

function SerieForm({ onAddSerie, onUpdateSerie, editingSerie, onFinishEdit }) {
  const [formValues, setFormValues] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (editingSerie) {
      setFormValues({
        titulo: editingSerie.titulo,
        numeroTemporadas: String(editingSerie.numeroTemporadas),
        dataLancamento: editingSerie.dataLancamento,
        diretor: editingSerie.diretor,
        produtora: editingSerie.produtora,
        categoria: editingSerie.categoria,
        dataAssistiu: editingSerie.dataAssistiu
      })
    } else {
      setFormValues(initialFormState)
    }
    setErrorMessage('')
  }, [editingSerie])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value
    }))
  }

  const isFormValid = () => {
    const {
      titulo,
      numeroTemporadas,
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistiu
    } = formValues

    if (
      !titulo.trim() ||
      !numeroTemporadas ||
      Number(numeroTemporadas) <= 0 ||
      !dataLancamento ||
      !diretor.trim() ||
      !produtora.trim() ||
      !categoria.trim() ||
      !dataAssistiu
    ) {
      return false
    }

    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isFormValid()) {
      setErrorMessage(
        'Preencha todos os campos obrigatórios e verifique se o número de temporadas é maior que zero.'
      )
      return
    }

    const payload = {
      ...formValues,
      numeroTemporadas: Number(formValues.numeroTemporadas)
    }

    if (editingSerie) {
      onUpdateSerie({ ...payload, id: editingSerie.id })
    } else {
      onAddSerie(payload)
    }

    setFormValues(initialFormState)
    setErrorMessage('')

    if (editingSerie && onFinishEdit) {
      onFinishEdit()
    }
  }

  const handleCancelEdit = () => {
    if (onFinishEdit) {
      onFinishEdit()
    }
    setFormValues(initialFormState)
    setErrorMessage('')
  }

  const title = editingSerie ? 'Editar série' : 'Cadastrar séries'
  const buttonLabel = editingSerie ? 'Salvar alterações' : 'Cadastrar Série'

  return (
    <section>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>{title}</h1>

      <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '16px' }}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={formValues.titulo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="numeroTemporadas">Número de Temporadas:</label>
          <input
            id="numeroTemporadas"
            name="numeroTemporadas"
            type="number"
            min="1"
            value={formValues.numeroTemporadas}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="dataLancamento">Data de Lançamento da Temporada:</label>
          <input
            id="dataLancamento"
            name="dataLancamento"
            type="date"
            value={formValues.dataLancamento}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="diretor">Diretor:</label>
          <input
            id="diretor"
            name="diretor"
            type="text"
            value={formValues.diretor}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="produtora">Produtora:</label>
          <input
            id="produtora"
            name="produtora"
            type="text"
            value={formValues.produtora}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="categoria">Categoria:</label>
          <input
            id="categoria"
            name="categoria"
            type="text"
            value={formValues.categoria}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="dataAssistiu">Data em que assistiu:</label>
          <input
            id="dataAssistiu"
            name="dataAssistiu"
            type="date"
            value={formValues.dataAssistiu}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginTop: '8px' }}>
          <button type="submit">{buttonLabel}</button>
          {editingSerie && (
            <button
              type="button"
              onClick={handleCancelEdit}
              style={{ marginLeft: '8px' }}
            >
              Cancelar edição
            </button>
          )}
        </div>
      </form>

      {errorMessage && (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '8px' }}>{errorMessage}</p>
      )}
    </section>
  )
}

export default SerieForm
