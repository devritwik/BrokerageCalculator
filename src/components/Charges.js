import ChargeItem from "./ChargeItem";

function Charges({charges}){

    return(
        <div>
            <ChargeItem category="Turnover" charge={charges.turnover}/>
            <ChargeItem category="Brokerage" charge={charges.brokerage.toFixed(2)}/>
            <ChargeItem category="STT Total" charge={charges.stt.toFixed(2)}/>
            <ChargeItem category="Exchange Txn Charge" charge={charges.exchange.toFixed(2)}/>
            <ChargeItem category="GST" charge={charges.gst.toFixed(2)}/>
            <ChargeItem category="SEBI Charge" charge={charges.sebi.toFixed(2)}/>
            <ChargeItem category="Stamp Duty" charge={charges.stamp.toFixed(2)}/>
            <ChargeItem category="Total Tax and Charges" charge={charges.total.toFixed(2)}/>
        </div>
    );
}

export default Charges;