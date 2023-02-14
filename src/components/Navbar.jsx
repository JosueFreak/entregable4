import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
        <h1 className='navbar_title'>Users Crud</h1>
        <button className='navbar_btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i> Create new user</button>
    </nav>
  )
}

export default Navbar