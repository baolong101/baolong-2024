import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import instance from '~/apis'
import { productType } from '~/types/product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams<{ id: string }>() // Ensure id is a string
  const [product, setProduct] = useState<productType | null>(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [id]) // Added id to the dependency array to re-fetch when id changes

  return (
    
      <div >
      {product && (
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
          
          <img
           src={product.thumbnail} alt={product.title}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] object-fit"
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-left">
            {product.title}
            </h2>
            <h4 className=" font-bold text-gray-900  text-left">Giá tiền: <span className='text-red-500 '>{product.price} $</span>
            </h4>
            <h4 className=" font-bold text-gray-900  text-left">
            Chi tiết sản phẩm
            </h4>
            <p className="hidden text-left text-gray-500 md:mt-4 md:block">
              {product.description}
            </p>
      
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400 no-underline"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      
        
      </section>
      )}
    </div>
    
  )
}

export default ProductDetail
