import PageHeader from "../../components/PageHeader";
import IngredientListItem from "../../components/Ingredient";

import { Router, useRouter } from 'next/router';

function Ingredients({ingredients}) {


    const handleSubmit = async(event)=> {

        const name = event.target.name.value;

        await fetch('/api/food/ingredient', {method: 'POST'}, {
            body: JSON.stringify({
                name: name
            })
        })
        const router = useRouter()
        router.reload(window.location.pathname)
    }

    return (
        <>
            <PageHeader name="Ingredients"/>
            <ul className="bg-gray-900 my-4 rounded-lg p-4 text-gray-400 overflow-y-auto h-1/2">
                {ingredients.map((ingredient) => {
                    return <IngredientListItem name={ingredient.name}/>
                })}
            </ul>
            <form onSubmit={handleSubmit} method="post">
                <label for="name"> Name: </label>
                <input type="text" id="name"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
  }

export async function getServerSideProps() {
    
    const res = await fetch('http://localhost:3000/api/food/ingredient');
    const data = await res.json();

    return {
        props: {
            ingredients: data
        }
    }
       
}

export default Ingredients;