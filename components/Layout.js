import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <body className="w-screen h-screen bg-base">
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link href="/">
            <a className="text-5xl m-2" href="/"> Karen </a>
          </Link>
          <ul className="menu menu-horizontal p-2">
          </ul>
        </div>
          <div className="flex-none">
            <div className=" text-primary-content btn btn-primary mr-4">
                <span> Login </span>
            </div>
        </div>
      </div>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer" class="btn btn-neutral m-4 drawer-button font-bold btn-lg">Menu</label>
          {children}
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li><Link href="/food/dashboard"><a> Dashboard </a></Link></li>
            <li><Link href="/food/pantry"><a href="/food/pantry"> Pantry </a></Link></li>
            <li><Link href="/food/recipes"><a> Recipes </a></Link></li>
            <li><Link href="/food/inventory"><a> Inventory </a></Link></li>
          </ul>
        </div>
      </div>
    </body>
  )
}