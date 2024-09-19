import React from 'react'

const NavbarItem = (props) => {
  return (
    <div className="navbar-item">
        <p className='font-mono text-xl text-gray-400 hover:text-gray-100'>{props.name}</p>
    </div>
  )
}

export default NavbarItem