import React, { useState } from 'react'
import HomeSidebarLeft from '../../Layouts/Sidebars/HomeSidebarLeft/HomeSidebarLeft'
import HomeSidebarRight from '../../Layouts/Sidebars/HomeSidebarRight/HomeSidebarRight'
import NewsFeed from '../../Components/NewsFeed/NewsFeed'
import PostCard from '../../Components/NewsFeed/PostCard'
import MessageInbox from '../../Components/MessageInbox/MessageInbox'

const Home = () => {
  const [inboxExpanded, setInboxExpanded] = useState(false)

  return (
    <div id='home_page' className='relative'>
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[2fr_3fr] gap-6">
        <div className='bg-white py-3 px-3 rounded-lg shadow-md border border-gray-300'>
          <HomeSidebarLeft />
        </div>
        <div className=''>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <NewsFeed />
        </div>
        <div className='md:col-span-2 lg:col-span-1 bg-white py-3 px-3 rounded-lg shadow-md border border-gray-300'>
          <HomeSidebarRight />
        </div>
      </div>

      <div className={`fixed ${inboxExpanded ? 'bottom-[0px]' : 'bottom-[-71%]'} right-0 w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-3/12 hidden sm:block min-h-[80%] bg-white border border-gray-300 rounded-lg shadow-lg`}>
        <MessageInbox isInboxExpanded = {inboxExpanded} setInboxExpanded = {setInboxExpanded}/>
      </div>
    </div>
  )
}

export default Home
