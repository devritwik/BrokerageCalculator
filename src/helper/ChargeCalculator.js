
export function calTurnover(buy, sell, qty){
    console.log(`Buy - ${buy}`);
    return (buy + sell)*qty;
}

/*Zerodha charges 0.03% or Rs.20 which ever is lower*/
export function calBrokerage(buy, sell,qty){
    return Math.min((0.03*0.01*(buy+sell)*qty),20);
}

//10 Rs per crore turnover
export function calSebi(buy,sell,qty){
    return (0.0000001 * (buy+sell)*qty);

};


/*0.1 % of buy and sell value */
export function calStt(buy, sell,qty){
    return (0.1*0.01*(buy+sell)*qty);
};


export function calExchange(buy, sell, qty){
    return (0.00325*0.01*(buy+sell)*qty);
};


export function calGst(buy,sell, qty){
    return (0.18*
        (calBrokerage(buy,sell,qty)
        +calExchange(buy,sell,qty)
        +calSebi(buy,sell,qty)));
};


export function calStamp(buy,sell,qty){
    return (0.00015*buy*qty);
};
