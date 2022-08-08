export default function NewIngredient() {
    return(
        <div className="card shadow-2xl ml-4 h-1/2  bg-neutral text-neutral-content m-4">
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
    );
}