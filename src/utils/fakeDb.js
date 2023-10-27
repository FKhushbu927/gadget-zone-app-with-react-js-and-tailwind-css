const addToDb = id => {
    let shoppingCart ={}

    //get the shopping cart from local storage

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)  
    }
    // add quantity

    const quantity = shoppingCart[id]
    if(quantity){
           const newQuantity = quantity + 1;
           shoppingCart[id] = newQuantity
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const  getStoredCart = () => {
    let shoppingCart = {} 

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart){
           shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;

}

//remove a specific element from local storage

const removeFromdB = id  => {
        //get the shopping cart from local storage

        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                   delete shoppingCart[id]
                   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
            }
     }
}

//clear all data from local storage

const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')



export { addToDb,   getStoredCart, removeFromdB, deleteShoppingCart}