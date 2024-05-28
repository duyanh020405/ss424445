import React from 'react'
import "./Bt2.scss"
export default function Header() {
  return (
    <div className='header'>
        <div className='thanh'>
        <div className='icon-nab'><img className='icon' src="https://static.vecteezy.com/system/resources/previews/000/568/450/original/home-icon-vector.jpg" alt="" /><p>Home</p></div>
        <div className='icon-nab'><img className='icon' src="https://tse2.mm.bing.net/th?id=OIP.U8J9HvSrXDJSHsz10QYTlwHaHa&pid=Api&P=0&h=180" alt="" /><p>Content</p></div>
        <div className='icon-nab'><img className='icon' src="https://th.bing.com/th/id/OIP.S_XkrKmRZKAw99ogkHSm8gAAAA?rs=1&pid=ImgDetMain" alt="" /><p>Categoties</p></div>
        <div className='icon-nab'><img className='icon' src="https://th.bing.com/th/id/OIP.ejMSJnhbFImx3woSa9bDvAHaHa?w=640&h=640&rs=1&pid=ImgDetMain" alt="" /><p>Categoties</p></div>
            
        </div>
        <div className='user'>
            <img src="https://th.bing.com/th/id/R.0ababdb27dd0bb71f21f03c98b6cd6f1?rik=%2fiVDxahrgNztPA&pid=ImgRaw&r=0" alt="" />
            <p>User 1</p>
        </div>
    </div>
  )
}
