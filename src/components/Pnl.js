import './Pnl.css';

function Pnl({pnl}){

    let clr = (pnl >=0 ) ? "#11B983":"#F34745";

    return(
        <div className="Pnl">
            <p>Net P&L: </p>
            <span style={{
                color: clr
            }}>{"₹ "+ pnl}</span>
        </div>
    );
}


export default Pnl;
