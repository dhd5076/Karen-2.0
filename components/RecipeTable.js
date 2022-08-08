export default function RecipeTable() {
    return(
        <div className="card shadow-2xl h-1/2 flex  bg-neutral text-neutral-content m-4">
            <div className="card-body">
                <h1 className="card-title"> Recipes </h1>
                    <div class="w-full flex my-4">
                        <input type="text" placeholder="Search…" class="input input-bordered ml-auto w-full" />
                        <button class="btn btn-primary btn ml-4">
                            Search
                        </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th className="text-left"> Recipe Name </th>
                                <th className="text-left"> Servings </th>
                                <th className="text-left"> Recipe Cost </th>
                                <th className="text-left"> Cost Per Serving </th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left">  Foccacia </td>
                                <td className="text-right">  12 </td>
                                <td className="text-right">  $12.00 </td>
                                <td className="text-right">  $1.00 </td>

                                <td className="text-right"> 
                                    <a className="btn btn-ghost" href="#"> Edit </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    );
}