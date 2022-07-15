import Link from 'next/link';

import NavLabel from './NavLabel'
import NavButton from './NavButton'

export default function Layout({ children }) {
  return (
    <body className="flex flex-row bg-slate-900 w-screen h-screen">
       <div className='bg-slate-900 flex-none w-64 rounded'>
            <ul className="bg-slate-700 p-4 rounded m-2 rounded-lg shadow-lg">
                <li>
                    <Link href="/">
                        <a className="text-4xl font-bold flex mb-4 text-slate-900 shadow-lg bg-slate-300 p-2 rounded">
                            <span> Karen </span>
                        </a>
                    </Link>
                </li>
                <NavLabel name="Food"/>
                <NavButton name="Overview" href="/food/"/>
                <NavButton name="Inventory" href="/food/inventory"/>
                <NavButton name="Ingredients" href="/food/ingredients"/>
                <NavButton name="Recipes" href="/food/recipes"/>
            </ul>
       </div>
       <div className="shadow-lg p-4 bg-slate-700 w-full h-full m-2 rounded-lg">
        {children}
       </div>
    </body>
  )
}