import Link from 'next/link'

export default function NavButton({name, href}) {
    return(
        <Link href={href}>
            <li className="block text-dark hover:text-white hover:bg-dark text-center align-middle p-4 ">
                <a className="text-4xl font-bold cursor-pointer align-center">
                    {name}
                </a>
            </li>
        </Link>
    )
}