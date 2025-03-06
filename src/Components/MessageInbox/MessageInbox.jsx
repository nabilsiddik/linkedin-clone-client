import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const MessageInbox = ({isInboxExpanded, setInboxExpanded}) => {

    return (
        <div className='border-b border-gray-300 py-3 px-3 transition duration-300'>
            {/* inbox header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <span>
                        Messaging
                    </span>
                </div>

                <div className='flex items-center gap-4'>
                    <span className='cursor-pointer'><BsThreeDots /></span>
                    <span className='cursor-pointer'><FaEdit /></span>
                    <span onClick={() => setInboxExpanded(!isInboxExpanded)} className='cursor-pointer'>
                        {isInboxExpanded ? <FaAngleDown /> : <FaAngleUp />}
                    </span>
                </div>
            </div>

            {/* inbox Messages */}
            
        </div>
    )
}

export default MessageInbox
