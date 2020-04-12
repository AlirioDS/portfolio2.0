import React from 'react'

import NavBar from './Navbar'

function Layout (props) { 
  return (
    <React.Fragment>
      {props.children}
      <NavBar />
    </React.Fragment>
  )
}

export default Layout
