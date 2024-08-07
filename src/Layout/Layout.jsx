import React from 'react'
import Header from './Header'

function Layout({children}) {
  return (
    <div className=' '>
        <Header/>
        {children}
    </div>
  )
}

export default Layout