import React from 'react';

const Question = ({openAndClose}) => {
    return (
        <div className='question'>
            <button onClick={openAndClose}>X</button>
            <h2>Preguntas Frecuentes</h2>
            <dl>
                <dt>¿No todas las sugerencias de busqueda funcionan?</dt>
                <dd>
                    Esto se debe a que la website aun esta en desarrollo y no, la barra de sugerencias no se equivoca, el problema es que la API arroja una lista de objetos parecidos y no encontrè la forma de seleccionar el que queremos. Esto solo pasa con algunas busquedas.<br></br>
                    Esto se arreglara en la V2.0 
                </dd>

                <dt>¿No puedo realizar mi busqueda?</dt>
                <dd>
                    Probablemente sea por que escribes un caracter incorrecto, trata de que lo que busques te aparesca en la barra de sugerencias la cual solo filtra caracteres parecidos. Ejemplo:
                    si buscas Citadel of Ricks y en la barra escribes c te aparecera, por que (Ricks) contiene una c minuscula en el medio, trata de empezar con la primera letra mayuscula, C tambien te aparecera, porque (Citadel) tiene una C mayucula al pricipio.<br></br>
                    Esto no se arreglara en la V2.0<br></br>
                    Pero muy probablemente subiremos una guia de busqueda
                </dd>
            </dl>
        </div>
    );
};

export default Question;