
function IngredientsView() {


    return (
        <>
            <div className="bg-white"> 
                <div className="bg-gray px-6 py-4 text-2xl font-bold flex justify-between shadow-lg"> 
                    <span className="my-auto">Current Stock</span>
                    <span>
                        <input type="text" name="q" className="rounded-lg bg-white shadow-inner p-2" />
                        <a href="#" className="text-white p-2 bg-dark shadow-lg rounded-lg font-semibold align-middle ml-4"> Search </a>
                    </span>
                </div>
                <div className="bg-white shadow-lg pb-4">
                    <table className="table-auto w-full border-separate p-4">
                        <thead className="text-xl">
                            <tr>
                                <th className="text-left"> Ingredient Name </th>
                                <th className="text-right"> Case Cost </th>
                                <th className="text-right"> Case Size </th>
                                <th className="text-right"> On Hand </th>
                                <th className="text-right"> Unit Type </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left"> Black Beans </td>
                                <td className="text-right"> $19.99 </td>
                                <td className="text-right"> 120.0 </td>
                                <td className="text-right"> 12.0 </td>
                                <td className="text-right"> oz </td>
                            </tr>

                            <tr>
                                <td className="text-left"> Black Beans </td>
                                <td className="text-right"> $19.99 </td>
                                <td className="text-right"> 120.0 </td>
                                <td className="text-right"> 12.0 </td>
                                <td className="text-right"> oz </td>
                            </tr>

                            <tr>
                                <td className="text-left"> Black Beans </td>
                                <td className="text-right"> $19.99 </td>
                                <td className="text-right"> 120.0 </td>
                                <td className="text-right"> 12.0 </td>
                                <td className="text-right"> oz </td>
                            </tr>

                            <tr>
                                <td className="text-left"> Black Beans </td>
                                <td className="text-right"> $19.99 </td>
                                <td className="text-right"> 120.0 </td>
                                <td className="text-right"> 12.0 </td>
                                <td className="text-right"> oz </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="w-full text-right"> 
                        <a href="#" className="inline-block mt-4 mr-4 bg-primary text-white text-2xl rounded-lg shadow-lg p-2 font-semibold">
                            Create New
                        </a>
                    </div>
                </div> 
            </div>
        </>
    );
  }


export default IngredientsView;