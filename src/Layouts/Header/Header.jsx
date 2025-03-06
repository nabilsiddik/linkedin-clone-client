import React from 'react'
import Logo from '../../Components/Logo'
import { FaSearch } from "react-icons/fa";


const Header = () => {
    return (
        <header className='bg-white py-3'>
            <div className="container">
                <div className="flex items-center gap-5">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div id='header-search' className='bg-[#f2f2f2] flex items-center gap-3 px-3 py-1 rounded-md '>
                        <div>
                            <FaSearch />
                        </div>
                        <input className=' bg-transparent border-none focus:outline-none' type="search" placeholder='Search...' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
