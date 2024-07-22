import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getAll, instance } from './Apis'
import './App.css'
import Edit from './Pages/Edit'
import Home from './Pages/Home'
import { IProduct } from './interface/product'
import Add from './Pages/add'
import Header from './Component/header'
import Footer from './Component/Footer'
import Banner from './Component/banner'
import HomePage from './Component/homePage';
import Detail from './Component/Detail'
import Shop from './Component/Shop'
import Page from './Component/page'

const Props = {
  
}
function App() {
  const nav= useNavigate()
  const [products, setProduct]=useState<IProduct[]>([])
  
  useEffect(()=>{
    const fetchData= async()=>{
      const res= await getAll()
      setProduct(res)
    }
    fetchData()
  },[])
  // delete 
  const handleDelete=async(id:number)=>{
    const confirm= window.confirm('are you sure you want to delete')
    if(confirm){
       await instance.delete(`products/${id}`)
      setProduct(products.filter((product)=>product.id !== id))
    }
  }
  // ----------------add
  const handleAdd= (product: IProduct)=>{
    (async()=>{
      try {
        const {data}= await instance.post('products', product)
        setProduct([...products, data])
        alert('Bạn đã thêm thành công sản phẩm mới')
        nav('/')
      } catch (error) {
        alert('loi: '+error)
      }
    })()
  }
  // ------------edit
  const handleEdit=(product: IProduct)=>{
    (async()=>{
      const {data}= await instance.put(`/products/${product.id}`, product)
      setProduct(products.map(item=> item.id === data.id ? data:item))
      alert("Bạn đã sửa thành công sản phẩm")
      nav('/')
    })()
  }
  return (
    <> 
    <Header/>
      {/* <Routes>
        <Route path='/' element={<Home product={products} onDel={handleDelete}/>}/>
        <Route path='/add' element={<Add onAdd={handleAdd}/> }/>
        <Route path='/edit/:id' element={<Edit onEdit={handleEdit}/>}/>
      </Routes> */}

    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/deltail' element={<Detail/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>

      <Footer/>
    </>
  )
}

export default App