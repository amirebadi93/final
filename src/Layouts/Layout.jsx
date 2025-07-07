import React, { Children } from 'react'
import Header from '../Components/Header'
function Layout() {
  return (
    <div>
        <Header />
        {Children}
    </div>
  )
}

export default Layout