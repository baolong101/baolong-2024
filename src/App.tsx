import './App.css'
import Home from './page/home'
import Footer from './components/footer'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './page/productdetail'
import Banner from './page/banner'
import Notfound from './page/notfound'
type Props = {}

const App = (props: Props) => {
  return (
    <>
      <Header />
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
