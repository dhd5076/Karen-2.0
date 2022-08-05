
import Router from 'next/router';

function IngredientsView({ingredient}) {


    const handleDelete = async(event)=> {
        fetch('/api/food/ingredient/' + ingredient._id, {
            method: 'DELETE'
        })
        .then(() => {
            Router.push('/food/ingredients/');
        })
    }

    return (
        <>
            <button onClick={handleDelete} class="bg-red-800 hover:bg-red-900 shadow-lg font-bold p-4 mt-2 text-gray-100 rounded">Delete</button>
        </>
    );
  }

export async function getServerSideProps(context) {


    
    const res = await fetch('http://localhost:3000/api/food/ingredient/' + context.params.id);
    const data = await res.json();

    return {
        props: {
            ingredient: data
        }
    }
       
}

export default IngredientsView;