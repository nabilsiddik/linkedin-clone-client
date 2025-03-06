import React from 'react'
import menu from '../Data/Menu'
import {NavLink} from 'react-router-dom'

const MainMenu = () => {
    return (
        <ul id='main-menu' className='flex items-center gap-10 main-menu'>
            {menu.length > 0 && menu.map((item) => {
                return <NavLink to={`${item?.url}`} key={item.id} className='flex flex-col items-center relative py-3'>
                    <span className='text-2xl'>{item?.icon}</span>
                    <span>{item?.title}</span>
                </NavLink>
            })}
        </ul>
    )
}

export default MainMenu
