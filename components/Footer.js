import React from 'react'

const Footer = () => {
    return(
        <div className='py-4 text-center bg-gray-400' >
            My Daily Status é um projeto criado durante o FullStack do DevPleno.
            <br/>
            Implementado por: {' '}
            <a href='https://www.linkedin.com/in/alberto-ribeiro-de-lemos-7603b6161/' className='hover:underline hover:text-blue-800 '> Alberto Lemos</a>
        </div>
    )
}

export default Footer