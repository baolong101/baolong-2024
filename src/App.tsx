import './App.css'
import Home from './page/home'
import Footer from './components/footer'
import Header from './components/header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetail from './page/productdetail'
import UpdateProduct from './page/admin/update'
import Notfound from './page/notfound'
import { useEffect, useState } from 'react'
import Dashboard from './page/admin/dashboard'
import AddProduct from './page/admin/addProduct'
import { productType } from './types/product'
import { createProduct, getAllProducts } from './apis/product'
import instance from './apis'
type Props = {}

const App = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<productType[]>([])

  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data)
    //   })

    // Cach 2:
    ;(async () => {
      const data = await getAllProducts()
      setProducts(data)
    })()

    // Cach 3:
    // const getProducts = async () => {
    //   try {
    //     const { data } = await instance.get('/products')
    //     setProducts(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getProducts()
  }, [])

  const handleAddProduct = async (newProduct: productType) => {
    const createdProduct = await createProduct(newProduct)
    setProducts([...products, createdProduct])
    navigate('/admin')
  }

  return (
    <>
      <Header />
      <main className='main container'>
        <Routes>
          {/* client */}
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Route>

          {/* admin */}
          <Route path='/admin'>
            <Route index element={<Dashboard products={products} />} />
            <Route path='/admin/update/:id' element={<UpdateProduct />} />
            <Route path='/admin/addProduct' element={<AddProduct onAdd={handleAddProduct} />} />
          </Route>

          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
