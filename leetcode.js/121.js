var maxProfit = function(prices) {
    let left = prices[0];
    let right = left;
    let profit = 0; 

    for(let i=1;i<prices.length;i++){
        right = prices[1];
        if(prices[i]<=left){
            left = right =prices[i]
        }else if(prices[i]>right){
            right = prices[i]
        }
        console.log(right,left);
        profit = right -left >profit ? right-left : profit
    }

    return profit
};

console.log(maxProfit([1,2]))