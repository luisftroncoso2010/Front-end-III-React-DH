import './Styles/card.css'
import { useState } from 'react';
//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario


function Card() {  
  /* Creamos los  estados */
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');  
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  /* Funcion submit */
  const handleNombre = (e) => setNombre(e.target.value)
  const handleColor = (e) => setColor(e.target.value)


  const reset = () => {
    setShow(false)
    setNombre('')
    setColor('')    
  }
  
  const handleSumbit = (e) => {
    e.preventDefault()
    if(nombre.trim().length > 3 && color.trim().length > 5){
      setShow(true)
      setError(false)
    } else{
      setError(true)
    }
  }
 
  return (
    <>
      <div className="container">

        <form onSubmit={handleSumbit}>
          <h1>Elige Un color:</h1>
          <input
            placeholder="Por Favor Coloca tu nombre"
            type="text"
            value={nombre} 
            onChange={handleNombre} 
            />

          <input 
            placeholder='Ingresa tu color favorito: (formato HEX) '
            type="text"
            value={color} 
            onChange={handleColor} 
          /> 
          <button className='boton-enviar' type="submit">Enviar</button> 
        </form>

        {
        show && (
          <>
          <div className="datos">     
            <span>Nombre: </span>{nombre}
            <span>Color: </span> #{color}
            <button className='reset' onClick={reset}>Reset</button>
          </div>
          </>
        )
      } {error && <span>Por favor chequea que la información sea correcta</span>}     
      </div>
    </>
    
    
  );
}

export  { Card };
