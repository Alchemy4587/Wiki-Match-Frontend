import React, {useState} from 'react'
import logo from '../assets/logo.png'


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    console.log(isMenuOpen)
  return (
    <nav className='bg-blue-500 p-4'>
        <div className='flex items-center justify-between'>
            {/*logo */}
        <div className='text-white text-2xl font bold'>
        <img src={logo} alt='Logo' className='h-12 w-25 mr-2' />
        </div>
        <div className='md:hidden'>
            <button className='text-white' onClick={toggleMenu}>
                <svg 
                    file='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    className='w-6 h-6'
                >
                    <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
            </button>
        </div>
        <ul className='hidden md:flex space-x-4'>
            <li><a href='#' className='text-white'>Home</a></li>
            <li><a href='#' className='text-white'>About</a></li>
            <li><a href='#' className='text-white'>profile</a></li>
            <li><a href='#' className='text-white'>Login</a></li>
        </ul>
        </div>
        {/* mobile Menu */}
        {isMenuOpen ? (
            <ul className='flex-col md:hidden '>
            <li className='py-2'><a href='#' className='text-white'>Home</a></li>
            <li className='py-2'><a href='#' className='text-white'>About</a></li>
            <li className='py-2'><a href='#' className='text-white'>profile</a></li>
            <li className='py-2'><a href='#' className='text-white'>Login</a></li>
        </ul>
        ) : null
    }
        </nav>
  )
}

export default Navbar;
