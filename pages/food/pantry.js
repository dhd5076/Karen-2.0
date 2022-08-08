import ButtonLink from "../../components/ButtonLink";

function PantryView() {
    return (
        <div className="flex">
            <div className="card shadow-2xl h-1/2 flex  bg-neutral text-neutral-content">
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
            <div className="card shadow-2xl ml-4 h-1/2  bg-neutral text-neutral-content">
                <div className="card-body">
                    <span class="card-title justify-between">
                        <span> Edit Ingredient </span>
                        <button class="btn btn-ghost btn-sm">
                            Close
                        </button>
                    </span>
                    <form>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Ingredient Name</span>
                            </label>
                            <label class="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Black Beans..." class="input input-bordered" />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Case Cost</span>
                            </label>
                            <label class="input-group">
                                <span>Price</span>
                                <input type="text" placeholder="10.00" class="input input-bordered text-right" />
                                <span> USD </span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Case Size</span>
                            </label>
                            <label class="input-group">
                                <span>Size</span>
                                <input type="text" placeholder="100" class="input input-bordered text-right" />
                                <span> Units </span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Starting Quantity</span>
                            </label>
                            <label class="input-group">
                                <span>Quantity</span>
                                <input type="text" placeholder="100" class="input input-bordered text-right" />
                                <span> Units </span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Unit Type </span>
                            </label>
                            <label class="input-group">
                                <span> Unit </span>
                                <select class="select">
                                    <option> oz </option>
                                    <option> ml </option>
                                    <option> ea </option>
                                </select>
                            </label>
                        </div>
                    </form>
                    <div className="card-actions justify-between mt-4">
                        <span>
                            <button className="btn btn-error mr-4"> Delete </button>    
                        </span>
                        <span>
                            <button className="btn btn-primary"> Update </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="card shadow-2xl ml-4 h-1/2  bg-neutral text-neutral-content">
                <div className="card-body">
                    <h1 className="card-title"> New Ingredient </h1>
                    <form>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Ingredient Name</span>
                            </label>
                            <label class="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Black Beans..." class="input input-bordered" />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Case Cost</span>
                            </label>
                            <label class="input-group">
                                <span>Price</span>
                                <input type="text" placeholder="10.00" class="input input-bordered text-right" />
                                <span> USD </span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Case Size</span>
                            </label>
                            <label class="input-group">
                                <span>Size</span>
                                <input type="text" placeholder="100" class="input input-bordered text-right" />
                                <span> Units </span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Starting Quantity</span>
                            </label>
                            <label class="input-group">
                                <span>Quantity</span>
                                <input type="text" placeholder="100" class="input input-bordered text-right" />
                                <span> Units </span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text"> Unit Type </span>
                            </label>
                            <label class="input-group">
                                <span> Unit </span>
                                <select class="select">
                                    <option> oz </option>
                                    <option> ml </option>
                                    <option> ea </option>
                                </select>
                            </label>
                        </div>
                    </form>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-success"> Create </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }


export default PantryView;