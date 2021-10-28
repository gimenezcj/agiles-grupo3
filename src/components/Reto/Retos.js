import React from 'react'
import Reto from './Reto';

function Retos({ retos }) {
  return (
    <div>
      {retos.map((reto, i) => <Reto reto={reto} key={`reto-key-${i}`} />)}
    </div>
  )
}

export default Retos;