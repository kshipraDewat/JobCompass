import React from 'react'
import logo from '../assets/logoo.png'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <div>
      <nav className='py-4 px-5 flex justify-between items-center'>
        <Link>
        <img src={logo} alt="" className='size-14'/>
        </Link>

        
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
       
       
       

      </nav>
       
    </div>
  )
}

export default Header
