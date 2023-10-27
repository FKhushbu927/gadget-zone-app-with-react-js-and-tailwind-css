import { getStoredCart } from "../utils/fakeDb"


export const productsAndCartData = async () => {
    const productsData =  await fetch('products.json')
    const products = await productsData.json()

    const savedCart = getStoredCart()
    let cartArr = []
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {

            const quantity = savedCart[id]
            foundProduct.quantity = quantity
            cartArr.push(foundProduct)
        //    setCart([...cart, foundProduct])
        }
    }

    return {cartArr, products}
  
}