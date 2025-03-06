import React from 'react'
import Logo from '../../Components/Logo'
import { FaSearch } from "react-icons/fa";
import MainMenu from '../../Components/MainMenu';

const Header = () => {

    return (
        <header className='bg-white'>
            <div className="container flex items-center justify-between">
                {/* Logo and Search */}
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

                {/* menu */}
                <div>
                    <MainMenu/>
                </div>
            </div>
        </header>
    )
}

export default Header
