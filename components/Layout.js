import Link from 'next/link';

import NavLabel from './NavLabel'
import NavButton from './NavButton'

export default function Layout({ children }) {
  return (
    <body className="w-screen h-screen bg-white overflow-hidden">
      <div className="bg-dark w-screen rounded-b-lg shadow-lg">
        <a href="/food" className="inline-block text-6xl font-bold ml-6 my-4 text-white font-sans"> Karen </a>
      </div>
      <div className="flex h-full">
        <div className='w-96 mt-0 shadow-lg rounded-lg bg-gray'>
            <ul className="m-0 rounded mt-6 h-full">
                <NavButton name="Dashboard" href="/food/"/>
                <NavButton name="Pantry" href="/food/ingredients"/>
                <NavButton name="Recipes" href="/food/ingredients"/>
                <NavButton name="Inventory" href="/food/recipes"/>
                <NavButton name="Settings" href="/food/recipes"/>
            </ul>
        </div>
        <div className="w-full h-full bg-white text-dark p-4 shadow-lg">
          {children}
        </div>
      </div>
    </body>
  )
}