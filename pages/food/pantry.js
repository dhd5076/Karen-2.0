import CurrentStockTable from "../../components/CurrentStockTable";
import EditIngredient from "../../components/EditIngredient";
import NewIngredient from "../../components/NewIngredient";

function PantryView() {
    return (
        <div className="flex">
            <CurrentStockTable/>

            <EditIngredient/>

            <NewIngredient/>
        </div>
    );
  }


export default PantryView;