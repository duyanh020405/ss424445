import React from 'react'
import Header from './Header'
import Meny from './Meny'
import Main from './Main'
export default function Bt2() {
  return (
    <div>
      <Header></Header>
      <div style={{display:"flex",flexDirection:"row"}}>
        <Meny></Meny>
        <Main></Main>
      </div>
    </div>
  )
}
