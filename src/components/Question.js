import React from 'react';

const Question = ({openAndClose}) => {
    return (
        <div className='question'>
            <button onClick={openAndClose}>X</button>
            <h2>Preguntas Frecuentes</h2>
            <dl>
                <dt>¿No puedo realizar mi busqueda?</dt>
                <dd>
                    Probablemente sea por que escribes un caracter incorrecto, trata de que lo que busques te aparesca en la barra de sugerencias la cual solo filtra caracteres parecidos. Ejemplo:
                    si buscas Citadel of Ricks y en la barra escribes c te aparecera, por que (Ricks) contiene una c minuscula en el medio, trata de empezar con la primera letra mayuscula, C tambien te aparecera, porque (Citadel) tiene una C mayucula al pricipio.<br></br>
                    Esto no se arreglara en la V2.0<br></br>
                    Pero muy probablemente subiremos una guia de busqueda
                </dd>

                <dt>Valoren la pagina, en especial las sugerencias de busqueda, me dolio mucho hacer el JSON. </dt>
                <dd>
                    Esta seccion se quitara cuando logre llegar al correcto filtrado de las sugerencias, hasta entonces ¡Hola mundo!
                </dd>
            </dl>
        </div>
    );
};

export default Question;