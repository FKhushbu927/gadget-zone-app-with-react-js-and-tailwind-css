
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { createContext, useState } from 'react'

export const ProductContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  const { cartArr, products } = useLoaderData()
  const [cart, setCart] = useState(cartArr)
  console.log(products)

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>

        <Header></Header>
        <div className='min-h-[calc(100vh - 137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>

      </CartContext.Provider>
    </ProductContext.Provider>


  )
}

export default App
