const products = [
    {
        id: 1,
        name: 'IT',
        edition: "Tapa Dura",
        year: "1999",
        price: '7500',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/78/It_%28Stephen_King_novel_-_cover_art%29.jpg',
    },
    {
        id: 2,
        name: 'Cementerio de Animales',
        edition: "Rústica",
        year: "2004",
        price: '2300',
        image: 'http://pm1.narvii.com/6335/73a15094a880eea05c82dee6d4733a457745a96e_00.jpg',
    },
    {
        id: 3,
        name: "El misterio de Salem's Lot",
        edition: "Rústica",
        year: "1988",
        price: '8000',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1314735183l/12477077.jpg',
    }
]

const product = {
    id: 3,
    name: "El misterio de Salem's Lot",
    edition: "Rústica",
    year: "1988",
    price: '8000',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1314735183l/12477077.jpg',
};

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};

export default products;