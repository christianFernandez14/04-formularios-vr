import { useState } from 'react'

const Formularios = () => {
  const [usuarios, setUsuarios] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    const datos = e.target
    const usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value
    }
    setUsuarios([
      ...usuarios, usuario])
  }

  const cambiarDato = e => {
    setUsuarios(estado_previo => {
      return {
        ...estado_previo,
        [e.target.name]: e.target.value
      }

    }
    )
  }


  return (
    <div>
      <h2>Formularios con React</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder='Nombre'
            name='nombre'
            onChange={cambiarDato}
          />
          <input
            type="text"
            placeholder='Apellido'
            name='apellido'
            onChange={cambiarDato}

          />
          <select
            onChange={cambiarDato}
            name='genero'
          >
            <option value="">Seleccione</option>
            <option value="hombre">Hombre</option>
            <option value="muijer">Mujer</option>
          </select>
        </div>
        <textarea
          placeholder='Biografia'
          name='bio'
          onChange={cambiarDato}

        ></textarea>
        <input type="submit" value='Enviar' />
      </form>
      <br />
      <div>
        <ul>
          {
            usuarios.map(usuario => (
              <li
                key={usuario.nombre}
              >
                {usuario.nombre} {usuario.apellido} es {usuario.genero}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Formularios