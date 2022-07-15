import Link from 'next/link'

export default function NavButton({name, href}) {
    return(
        <Link href={href}>
            <li>
                <a className="ml-2 my-1 flex cursor-pointer overflow-hidden pl-2 text-gray-300 rounded hover:bg-gray-400 hover:text-white">
                    {name}
                </a>
            </li>
        </Link>
    )
}