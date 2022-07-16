import Link from 'next/link';

export default function Ingredient({ ingredientID, name }) {
  return (
    <li className="border my-2 p-2 rounded-lg">
        <Link href={"/food/ingredients/" + ingredientID}>
            <a className="font-bold"> {name} </a>
        </Link>
    </li>
  )
}