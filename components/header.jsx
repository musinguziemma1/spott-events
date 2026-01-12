"use client";

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Authenticated, Unauthenticated } from 'convex/react'

const Header = () => {
  return (
    <>
        <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
                {/* Logo */}
                <Link href={"/"} className='flex items-center'>
                    <Image
                        src="/spott.png"
                        alt="Spott event logo"
                        width={500}
                        height={500}
                        className="w-full h-11"
                        priority
                    />
                </Link>

                {/* Search & Location - Desktop only */}

                {/* Right Side Action */}
                <div className="flex items-center">
                    <Authenticated>
                        <UserButton />
                    </Authenticated>

                    <Unauthenticated>
                        <SignInButton mode='modal'>
                            <Button size='sm'>Sign In</Button>
                        </SignInButton>
                    </Unauthenticated> 
                </div>
            </div>

            {/* Mobile Search & Location - Below Header */}

            {/* Loader */}
        </nav>

        {/* Modals */}
    </>
  )
}

export default Header
