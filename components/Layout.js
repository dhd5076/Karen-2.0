import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <body className="w-screen h-screen bg-base">
      <div class="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link href="/">
            <a class="btn btn-ghost normal-case text-5xl block" href="/"> Karen </a>
          </Link>
          <ul className="menu menu-horizontal p-2">
            <li><Link href="/food/dashboard"><a className="btn"> Dashboard </a></Link></li>
            <li><Link href="/food/pantry"><a className="btn" href="/food/pantry"> Pantry </a></Link></li>
            <li><Link href="/food/recipes"><a className="btn"> Recipes </a></Link></li>
            <li><Link href="/food/inventory"><a className="btn"> Inventory </a></Link></li>
          </ul>
        </div>
          <div className="flex-none">
            <div class=" text-error-content btn btn-error mr-4">
                <span> Logout </span>
            </div>

        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </body>
  )
}