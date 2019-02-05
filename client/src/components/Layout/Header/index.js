import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser }) => {
  return (<nav className='nav clearfix'>
    <div className='float-left'>
      <span className='nav-link'>Adventure Time </span>
    </div>
    <div className='float-right'>
      {currentUser
        ? (
          <span>
            <Link className='nav-link' to='/profile'>Profile</Link>
            <Link className='nav-link' to='/logout'>Logout</Link>
            <Link className='nav-link' to='/profile/edit'>Edit</Link>
          </span>
        )
        : (
          <span>
            <Link className='nav-link' to='/'>LogIn</Link>
            <Link className='nav-link' to='/signup'>Signup</Link>
          </span>
        )
      }
    </div>
  </nav>
  )
}
