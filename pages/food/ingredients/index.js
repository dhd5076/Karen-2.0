import PageHeader from "../../../components/PageHeader";
import IngredientListItem from "../../../components/Ingredient";

import Router from 'next/router';

function IngredientsView({ingredients}) {


    const handleCreate = async(event)=> {

        event.preventDefault();

        const name = event.target.name.value;
        fetch('/api/food/ingredient', {
            method: 'POST', 
            body: JSON.stringify({
            name: name
        }), headers: {
            'Content-Type': 'application/json'
          }})
        .then(() => {
            Router.reload()
        })
    }

    return (
        <>
            <PageHeader name="Ingredients"/>
            <ul className="bg-gray-900 my-4 rounded-lg p-4 text-gray-400 overflow-y-auto h-1/2">
                {ingredients.map((ingredient) => {
                    return <IngredientListItem ingredientID={ingredient._id} key={ingredient._id} name={ingredient.name}/>
                })}
            </ul>
            <form onSubmit={handleCreate}>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name"/>
                <button className="text-white m-2 bg-green-600 p-2 rounded-lg font-bold shadow-lg" type="submit">Create</button>
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

export default IngredientsView;