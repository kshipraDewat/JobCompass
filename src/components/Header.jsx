import React, { useEffect, useState } from 'react'
import logo from '../assets/logoo.png'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false)
  const [search, setSearch] = useSearchParams()
  const user = useUser()
  useEffect(() => {
    if (search.get('sign-in')) {
      setShowSignIn(true)
    }
  }, [search])
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };
  return (
    <div>
      <nav className='py-4 px-5 flex justify-between items-center'>
        <Link>
          <img src={logo} alt="" className='size-14' />
        </Link>

        <div className='flex gap-5'>
          <SignedOut>
            <Button variant='outline' onClick={() => setShowSignIn(true)} className='border border-white'>Login</Button>
          </SignedOut>
          <SignedIn>

           {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
              <Button variant='destructive' className='rounded-full'> <PenBox size={20} className='' /> Post a job</Button>
              </Link>
            )}

            <UserButton appearance={{
              elements: {
                avatarBox: "w-10 h-10"
              }
            }}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label='My Jobs'
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href='/myjobs'
                />
                <UserButton.Link
                  label='Saved Jobs'
                  labelIcon={<Heart size={15} />}
                  href='/savedjobs'
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>

      </nav>
      {showSignIn &&
        <div
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleOverlayClick}
        >

          <SignIn
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
          />
        </div>}
    </div>
  )
}

export default Header
