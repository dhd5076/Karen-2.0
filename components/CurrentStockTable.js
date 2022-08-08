export default function CurrentStockTable() {
    return(
        <div className="card shadow-2xl h-1/2 flex  bg-neutral text-neutral-content m-4">
            <div className="card-body">
                <h1 className="card-title"> Current Stock </h1>
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
                                <th className="text-left"> Ingredient Name </th>
                                <th className="text-right"> Case Cost </th>
                                <th className="text-right"> Case Size </th>
                                <th className="text-right"> On Hand </th>
                                <th className="text-right"> Unit Type </th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left">  Black Beans </td>
                                <td className="text-right"> $19.99 </td>
                                <td className="text-right"> 120.0 </td>
                                <td className="text-right"> 12.0 </td>
                                <td className="text-right"> oz </td>
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