function checkMissing(arr) {
    sum = arr.reduce((a,b)=>a+b);
    return 1035 - sum;
}


// 1035 = 1+2+...+44+45
// sum = 1+2+...+44+45 - missing

// Therefore, aritmetically:
// 1035 - sum = missing.