// import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderDash() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfos") as string )
  return (
    <header className="top-0 sticky">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="hidden gap-3 justify-center lg:flex lg:flex-1 lg:justify-end">
          {userInfo.prenom}
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Se déconnecter <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
