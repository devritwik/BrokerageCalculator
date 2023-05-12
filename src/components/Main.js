import Inputs from "./Inputs";
import Charges from "./Charges";
import * as cal from '../helper/ChargeCalculator';
import Pnl from "./Pnl";


import { useState } from "react";


function Main(){

    let [buyPrice, setBuyPrice] = useState(0);
    let [sellPrice, setSellPrice] = useState(0);
    let [quantity, setQuantity] = useState(0);


    let charges = {};

    charges.turnover = cal.calTurnover(buyPrice,sellPrice, quantity);
    charges.brokerage = cal.calBrokerage(buyPrice,sellPrice, quantity);
    charges.stt = cal.calStt(buyPrice,sellPrice, quantity);
    charges.exchange = cal.calExchange(buyPrice,sellPrice, quantity);
    charges.gst = cal.calGst(buyPrice,sellPrice, quantity);
    charges.sebi = cal.calSebi(buyPrice,sellPrice, quantity);
    charges.stamp = cal.calStamp(buyPrice,sellPrice, quantity);

    charges.total = charges.brokerage
    +charges.stt
    +charges.exchange
    +charges.gst
    +charges.sebi
    +charges.stamp;


    //console.log(charges);

    return(
        <div>
            <Inputs setBuyPrice={setBuyPrice} setSellPrice={setSellPrice} setQty={setQuantity}/>
            <Charges charges={charges}/>
            <Pnl pnl={((sellPrice-buyPrice)*quantity - charges.total).toFixed(3)}/>
        </div>
    );

}







export default Main;