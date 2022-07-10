const products = [
    {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25", category: "burger"},
    {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodfries.png", stock: "25", category: "fries"},
    {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "https://i.postimg.cc/KK3frdRP/foodpepsi.png",  stock: "25" , category: "drink"},
    {id: "4", name: "ice", description: "es un helado", price: "90", img: "https://i.postimg.cc/RJ4TmhGd/foodice.png",  stock: "25" , category: "dessert"},
    {id: '5', name: "burger_a", description: "es una hamburguesa", price: "200", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25", category: "burger"},
    {id: "6", name: "fries_a", description: "son papas fritas", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodfries.png", stock: "25", category: "fries"},
    {id: "7", name: "soda_a", description: "es una pepsi", price: "100", img: "https://i.postimg.cc/KK3frdRP/foodpepsi.png",  stock: "25" , category: "drink"},
    {id: "8", name: "ice_a", description: "es un helado", price: "90", img: "https://i.postimg.cc/RJ4TmhGd/foodice.png",  stock: "25" , category: "dessert"},
    ]
        
        export const getData = (categoryId) => new Promise ((resolve, reject) => {
        const filterProd = products.filter(
            (prod) => prod.category === categoryId
            );
        //let condicion = true
        setTimeout(()=>{
        categoryId
        ? resolve(filterProd)
        : resolve(products)

/* viejo */
        /* if (condicion){
            resolve(products)
        }else{
            reject(console.log("nando"))
            }
         */}, 4500) 
        })
        
        const product ={
            id: '33',
            name : "bigBurger",
            img : "https://imgbin.com/png/47RxwqvX/whopper-hamburger-cheeseburger-big-king-bacon-png",
            price: "200",
            category: "food",
            description: "es una hamburguesa grande",
        };
         export const getProduct = (id)=> {
            new Promise ((resolve, reject) => {
            //let condition = true
            const founded = product.find(
            product => product.id === Number(id)
            );
            setTimeout(()=>{
                resolve(founded)
                }, 3000)
        })
    }