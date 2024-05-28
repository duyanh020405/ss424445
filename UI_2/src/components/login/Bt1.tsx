import React from 'react'
import "./Bt1.scss"
export default function Bt1() {
  return (
    <div className='all'>
      <div>
        <img src="https://pbs.twimg.com/media/Fdr1UkhaAAAwGRr.jpg" alt="" />
      </div>
      <div className='for'>
        <h3 style={{fontSize:"x-langer"}}>Login</h3>
        <br />
        <p>Email</p>
        <br />
        <input className='input_email' type="text" placeholder='placeholder content'/>
        <br />
        <br />
        <p>Password</p>
        <br />
        <input className='input_email' type="text" placeholder='placeholder content'/>
        <p className='forgot'>Forgot password ?</p>
        <br /><br />
        <button className='login'>Login</button>
        <br />
        <br />
        <button className='login2'>Regiter now</button>

      </div>
    </div>
  )
}
