import React from 'react'

const Formularios = () => {
  return (
    <div>
      <h2>Formularios con React</h2>

      <form>
        <div>
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
          <select>
            <option value="">Seleccione</option>
            <option value="hombre">Hombre</option>
            <option value="muijer">Mujer</option>
          </select>
        </div>
        <textarea placeholder='Biografia'></textarea>
        <input type="submit" value='Enviar'/>
      </form>
    </div>
  )
}

export default Formularios