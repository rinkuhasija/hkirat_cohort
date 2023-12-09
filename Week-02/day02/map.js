let arr = [5, 1, 3, 2, 6]

let newArr = arr.map((x) => {
    return x * 2
})
console.log(newArr);

let greaterThanFive = arr.filter(x => x > 5)
console.log(greaterThanFive);

let addAll = arr.reduce((acc, red) => acc + red, 0)

console.log(addAll);


const allAtOnce = arr.map(x => x * 2).filter(x => x > 8)
console.log(allAtOnce);

//fetch

async function fetchProducts() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await response.json();
        console.log(`Here : ${response.status}`);
        console.log(response);
        console.log("Json");
        console.log(data);
    } catch (e) {
        console.log("Error" + e);
    }
}

console.log(fetchProducts());