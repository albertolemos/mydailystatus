import React from 'react'
import NavBar from '../components/NavBar'

const Header = () => {
    return (
        <div className='bg-gray-200 ' >
            <h1>
                <a href="http://localhost:3000">
                    <img 
                        className='h-24 mx-auto py-4'  
                        src="/logo.png" 
                        alt="Olá SFL" 
                        height='60'                    
                    />
                </a>
            </h1>  
            <NavBar />          
        </div>
    )
}

export default Header