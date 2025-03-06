import React from 'react'
import mediaIcon from '../../assets/images/icons/photo.png'
import ideaIcon from '../../assets/images/icons/idea.png'
import articleIcon from '../../assets/images/icons/content-writing.png'

const PostCard = () => {
    return (
        <div className='py-5 px-5 border border-gray-300 rounded-lg bg-white'>
            <div className='flex items-center gap-3 flex-1'>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className='border border-gray-300 rounded-full py-3 px-2 flex-2'>
                    <h3>Start a post</h3>
                </div>
            </div>

            <div className='flex items-center justify-between mt-5'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img className='w-[30px]' src={mediaIcon} alt="media icon" />
                    <span className='font-bold'>Media</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img className='w-[30px]' src={ideaIcon} alt="idea icon" />
                    <span className='font-bold'>Give Advice</span>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img className='w-[30px]' src={articleIcon} alt="article icon" />
                    <span className='font-bold'>Write Article</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard
