const products = [
    {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25", category: "food"},
    {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodfries.png", stock: "25", category: "food"},
    {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "https://i.postimg.cc/KK3frdRP/foodpepsi.png",  stock: "25", category: "drink"},
    {id: "4", name: "ice", description: "es un helado", price: "90", img: "https://i.postimg.cc/RJ4TmhGd/foodice.png",  stock: "25", category: "dessert"},
    {id: "5", name: "cake", description: "es un pastel", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodcake.png",  stock: "25", category: "dessert"},
    {id: "6", name: "pizza", description: "es una pizza", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodpizza.png",  stock: "25", category: "food"},
    {id: "7", name: "chicken", description: "es un pollo", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodchicken.png",  stock: "25", category: "food"},
    {id: "8", name: "fish", description: "es un pescado", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodfish.png",  stock: "25", category: "food"},
    {id: "9", name: "meat", description: "es un carne", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodmeat.png",  stock: "25", category: "food"},
    {id: "10", name: "salad", description: "es un ensalada", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodsalad.png",  stock: "25", category: "food"},
    {id: "11", name: "soup", description: "es un choripan", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodsoup.png",  stock: "25", category: "food"},
    {id: "12", name: "dessert", description: "es un postre", price: "100", img: "https://i.postimg.cc/sGm4gzNr/fooddessert.png",  stock: "25", category: "dessert"},
    {id: "13", name: "drink", description: "es un bebida", price: "100", img: "https://i.postimg.cc/sGm4gzNr/fooddrink.png",  stock: "25", category: "drink"},
    {id: "14", name: "coffee", description: "es un cafe", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodcoffee.png",  stock: "25", category: "drink"},
    {id: "15", name: "tea", description: "es un té", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodtea.png",  stock: "25", category: "drink"},
    {id: "16", name: "juice", description: "es un jugo", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodjuice.png",  stock: "25", category: "drink"},
    {id: "17", name: "milk", description: "es un leche", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodmilk.png",  stock: "25", category: "drink"},
    {id: "18", name: "soda", description: "es una pepsi", price: "100", img: "https://i.postimg.cc/KK3frdRP/foodpepsi.png",  stock: "25", category: "drink"},
    {id: "19", name: "ice", description: "es un helado", price: "90", img: "https://i.postimg.cc/RJ4TmhGd/foodice.png",  stock: "25", category: "dessert"},
    {id: "20", name: "cake", description: "es un pastel", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodcake.png",  stock: "25", category: "dessert"},
    {id: "21", name: "pizza", description: "es una pizza", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodpizza.png",  stock: "25", category: "food"},
    {id: "22", name: "chicken", description: "es un pollo", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodchicken.png",  stock: "25", category: "food"}
]
export const getData = new Promise ((resolve, reject) => {
let condicion = true
setTimeout(()=>{
if (condicion){
    resolve(products)
}else{
    reject(console.log("nando"))
    }
}, 3000) 
})
export const getPords = (cat) => {
    return new Promise((resolve, reject) => {
        const filtredProds = products.filter(
            (prod) => prod.category === cat
        );
        setTimeout(() => {
        category ? resolve(filtredProds) : resolve(products);
        }, 1000);
    });
}
export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const filtredProds = products.filter(
            (prod) => prod.id === id
        );
        setTimeout(() => {
        category ? resolve(filtredProds) : resolve(products);
        }, 1000);
    });
}

