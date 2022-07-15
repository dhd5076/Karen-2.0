export default function NavLabel({name}) {
    return(
        <li className="my-1 font-bold bg-gray-500 rounded pl-2">
            <span className="flex text-lg items-center text-center text-white">{name}</span>
        </li>
    );
}