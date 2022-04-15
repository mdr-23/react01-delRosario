import products from "./products";

const customFetch = (time) => {
    return new Promise ((resolve, reject) => {
        
        setTimeout(() => {
            if(true) {
                resolve(products)
            }else{
                reject("error")
            }
        }, time)
    })
}

export default customFetch;