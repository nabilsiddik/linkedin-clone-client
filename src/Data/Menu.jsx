import React from 'react'
import { IoHome } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";

const menu = [
    {
        id: 1,
        title: 'Home',
        url: '/feed',
        icon: <IoHome />
    },
    {
        id: 2,
        title: 'My Newtwork',
        url: '/my-network',
        icon: <PiUsersThreeFill />
    },
    {
        id: 3,
        title: 'Jobs',
        url: '/jobs',
        icon: <FaBriefcase />
    },
    {
        id: 4,
        title: 'Messaging',
        url: '/messages',
        icon: <BsFillChatDotsFill />
    },
    {
        id: 5,
        title: 'Notifications',
        url: '/notifications',
        icon: <IoNotifications />
    }
]

export default menu
