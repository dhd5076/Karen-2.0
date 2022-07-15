import Link from 'next/link';

export default function Ingredient({ name }) {
  return (
    <li className="border my-2 p-2 rounded-lg">
        <Link href="/">
            <a className="font-bold"> {name} </a>
        </Link>
    </li>
  )
}