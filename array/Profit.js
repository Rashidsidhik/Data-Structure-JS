var maxProfit = function(prices) {
    let profit=0;
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>0 && profit<prices[j]-prices[i]){
                profit=prices[j]-prices[i];
            }
        }
    }
    return profit
};
