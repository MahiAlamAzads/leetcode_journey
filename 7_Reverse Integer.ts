function reverse(x: number): number {
    let num: number = x;
    let result = 0;
    let isPositive: boolean = x > 0 ? true : false;
    if(!isPositive){
        num = -num;
    }
    while(num > 0){
        result = num % 10 + result * 10;
        num = Math.floor(num/10)
    }
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2, 31)){
        return 0;
    }
    return isPositive ? result : -result;
};

console.log(reverse(321))
console.log(reverse(1234567899876543))