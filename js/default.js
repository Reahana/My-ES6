// function add(a,b){
//     b = b || 0;
//     if(b === undefined){
//         b =0;
//     }
//     const total =a+b;
//     return total;
// }

function add(a, b=0){
    const total = a+b;
    return total;
}
const result = add(10,20);
console.log(result);


// a, b parameter
// a , b =0 default parameter (call er time e man na dile ata use hobe)
// 10, 20 argument 