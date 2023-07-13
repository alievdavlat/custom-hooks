import React from 'react'
import { navbarItems } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='d-flex align-items-center container p-5 justify-content-center gap-5 list-unstyled'>
        {
          navbarItems.map( items => <Link key={items.id} to={items.path} className='btn btn-outline-warning text-white fw-bold'><li>{items.name}</li></Link> )
        }
    </ul>
  )
}

export default Navbar