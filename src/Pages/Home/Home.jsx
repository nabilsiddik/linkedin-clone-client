import React from 'react'
import HomeSidebarLeft from '../../Layouts/Sidebars/HomeSidebarLeft/HomeSidebarLeft'
import HomeSidebarRight from '../../Layouts/Sidebars/HomeSidebarRight/HomeSidebarRight'
import NewsFeed from '../../Components/NewsFeed/NewsFeed'
import PostCard from '../../Components/NewsFeed/PostCard'

const Home = () => {
  return (
    <div id='home_page' className='py-10'>
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[2fr_3fr] gap-6">
        <div className='bg-white py-3 px-3 rounded-lg shadow-md'>
          <HomeSidebarLeft />
        </div>
        <div className=''>
          <PostCard />
          <NewsFeed />
        </div>
        <div className='md:col-span-2 lg:col-span-1 bg-white py-3 px-3 rounded-lg shadow-md'>
          <HomeSidebarRight />
        </div>
      </div>
    </div>
  )
}

export default Home
