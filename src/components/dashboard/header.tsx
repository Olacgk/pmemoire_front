// import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderDash() {
  return (
    <header className="bg-white top-0 sticky w-full shadow-md shadow-blue-gray-900/5">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <p className="text-[#041f4e] text-xl font-semibold leading-6 w-5">Partage Mémoire</p>
            {/* <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" /> */}
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
            Se déconnecter <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
