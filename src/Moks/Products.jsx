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

