import './ChargeItem.css';


function ChargeItem({category, charge}){

    return(
        <div className="ChargeItem">
            <label>{category}</label> 
            <span>{"₹ "+charge}</span>
        </div>
    );
}

export default ChargeItem;
