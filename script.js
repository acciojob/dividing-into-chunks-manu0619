const arr = [1, 2, 3, 4, 1, 0, 2, 2]; 
const divide = (arr, n) => {
    let res = [];
    
    while (arr.length > 0) {
        let sum = 0;
        let temp = []; // Temporary array to hold the current group

        do {
            let a = arr.shift();
            sum += a;
            temp.push(a);
        } while (arr.length > 0 && sum + arr[0] <= n);

        res.push(temp);
    }

    return res;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
