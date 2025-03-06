import React from 'react'
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import mediaImage from '../../assets/images/img/media.jpg'
import { BiLike } from "react-icons/bi";
import { LiaComment } from "react-icons/lia";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

const PostCard = () => {

    const shortMessage = (message, maxLength) => {
        const shortedMessage = message.length > maxLength ? message.slice(0, maxLength) + '...' : message

        return shortedMessage
    }

    return (
        <div id='post_card' className='bg-white mt-5 py-5 px-5 rounded-lg mb-3 shadow-lg border border-gray-300'>
            <div className='flex items-start gap-3'>
                <div className='flex items-center gap-3'>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>Nabil Siddik</h3>
                        <p>{shortMessage('CEO Programming Hero | Web Developer | MERN Stack', 25)}</p>
                        <p>2d Ago . Public</p>
                    </div>
                </div>

                <div className='flex items-start gap-3 text-2xl ml-auto'>
                    <span className='cursor-pointer'><IoClose /></span>
                    <span className='cursor-pointer'><BsThreeDots /></span>
                </div>
            </div>

            <div className='my-5'>
                <p>{shortMessage('Alhamdulillah! So far, I’ve had 1-on-1 discussions with 102 people over the last 6 months, spending more than 3200 minutes listening, learning, and sharing insights. I don’t believe in giving generic advice based on a quick question. Instead, I prefer to deeply understand someone’s challenges before sharing my perspective—so they can make their own informed decisions.', 100)}</p>
            </div>

            <div className='py-5 border-t border-gray-300'>
                <img className='w-full' src={mediaImage} alt="" />
            </div>

            <div className='border-b border-gray-300 pb-3 flex itemsc-center justify-between'>
                <div>94</div>
                <div>
                    <div>2 comments . 2 reposts</div>
                </div>
            </div>

            <div className='mt-2 flex items-center justify-between'>
                <button className='btn bg-transparent border-none hover:bg-[rgb(140,140,140,10%)]'><BiLike className='text-xl' /> Like</button>
                <button className='btn bg-transparent border-none hover:bg-[rgb(140,140,140,10%)]'> <LiaComment className='text-xl' />
                Comment</button>
                <button className='btn bg-transparent border-none hover:bg-[rgb(140,140,140,10%)]'> <BiRepost className='text-xl' /> Repost</button>
                <button className='btn bg-transparent border-none hover:bg-[rgb(140,140,140,10%)]'> <IoIosSend className='text-xl' /> Send</button>
            </div>
        </div>
    )
}

export default PostCard
