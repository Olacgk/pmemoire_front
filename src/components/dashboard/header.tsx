// import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderDash() {
  return (
    <header className="top-0 sticky">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Se déconnecter <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
