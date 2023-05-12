import InputField from "./InputField";
import './Inputs.css';


function Inputs({setBuyPrice, setSellPrice, setQty}){

    return(
        <div className="Inputs">
        <InputField name="Buy" setValue={setBuyPrice}/>
        <InputField name="Sell" setValue={setSellPrice}/>
        <InputField name="Quantity" setValue={setQty}/>
        </div>
    );
}

export default Inputs;
