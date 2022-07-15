export default function PageHeader({ name }) {
    return (
        <h1 className="shadow-lg text-gray-400 text-4xl p-4 font-bold bg-gray-900 p-2 rounded-lg text-center items-center"> 
            {name}
        </h1>
    );
}