import React from 'react'

const Header = (props) => {
  return ( <div>
  <h1 className='header'>{props.title}</h1>
  </div>
  )
}

export default Header