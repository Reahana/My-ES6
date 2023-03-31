const fish ={
    name: 'king',
    place: 'river',
    color: 'silver',
    price:4000
}
// const color = fish.color;
const price = fish.price;

const {age,name}  = {name: 'reahana', age:25, profession:'CPM'}
console.log(age,name);
const {color}= fish;
console.log(color);

const [a]=[44,899,890,67];
console.log(a);

function getNames(){
    return ['asrafi','reahana'];
}

const [r,b] = getNames();
console.log(b,r);