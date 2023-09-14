
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
