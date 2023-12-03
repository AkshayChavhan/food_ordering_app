import React from 'react'
import Link from "next/link";


function Header() {
  return (
    <header className="flex justify-between">
    <Link href={''} className="text-primary font-semibold text-2xl">
      Desi Piza
    </Link>
    <nav className="flex gap-8 items-center text-primary">
      <Link href={''}> Home </Link>
      <Link href={''}> Menu </Link>
      <Link href={''}> About </Link>
      <Link href={''}> Contact </Link>
      <Link className='bg-primary text-white font-semibold px-6 py-3 rounded-full' href={''}> Login </Link>
    </nav>
  </header>
  )
}

export default Header