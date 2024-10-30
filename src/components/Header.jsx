import React from 'react'
import logo from '../assets/logoo.png'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div>
      <nav className='py-4 flex justify-between items-center'>
        <Link>
        <img src={logo} alt="" className='size-14'/>
        </Link>

        <Button variant='outline' className='' >Login</Button>
      </nav>
       
    </div>
  )
}

export default Header
