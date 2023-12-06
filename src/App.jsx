import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Error from './Components/Error/Error'
import CartWidget from './Components/CartWidget/CartWidget'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:id' element={<ItemListContainer />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<CartWidget />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
