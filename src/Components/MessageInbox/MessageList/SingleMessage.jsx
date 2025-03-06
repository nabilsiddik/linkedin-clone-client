import React from 'react'

const SingleMessage = () => {

    const shortMessage = (message, maxLength) => {
        const shortedMessage = message.length > maxLength ? message.slice(0, maxLength) + '...' : message

        return shortedMessage
    }

    return (
        <div className='px-3 border-b border-gray-300 py-3 hover:bg-gray-300'>
            <div className="flex items-start gap3">
                <div className="flex items-start gap-3 w-10/12">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>Nabil Siddik</h3>
                        <p>You: {shortMessage('Thanks for being an active member. I would likle to offer you free trial.', 40)}</p>
                    </div>
                </div>

                <div className='w-2/12 text-right'>
                    5 Mar
                </div>
            </div>
        </div>
    )
}

export default SingleMessage
