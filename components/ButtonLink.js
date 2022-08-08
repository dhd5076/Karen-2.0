export default function ButtonLink({name, href}) {
    return(
        <a href={href} className="inline-block m-4 bg-button text-buttonText text-2xl py-2 px-4 font-semibold">
            {name}
        </a>
    );
}