import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { productType } from '~/types/product'

type Props = {}

const UpdateProduct = (props: Props) => {
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
  }, [id])
  return (
    <div>
      {product && (
        <section className='relative flex flex-wrap lg:h-screen lg:items-center'>
          {/* hình ảnh */}
          <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
            <img src={product.thumbnail} alt={product.title} className='absolute inset-0 h-full w-full object-cover' />
          </div>
          {/* nội dung */}
          <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
            <div className='mx-auto max-w-lg text-center'>
              <h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>

              <p className='mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa
                autem, at itaque nostrum!
              </p>
            </div>

            <form action='#' className='mx-auto mb-0 mt-8 max-w-md space-y-4'>
              <div>
                <div className='relative'>
                  <p className='text-left'>Name</p>
                  <input
                    type='email'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                    value={product.title}
                  />
                </div>
              </div>

              <div>
                <div className='relative'>
                  <p className='text-left'>Price</p>
                  <input
                    type='number'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                    value={product.price}
                  />
                </div>
              </div>
              <div>
                <div className='relative'>
                  <p className='text-left'>Description</p>
                  <input
                    type='text'
                    className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                    value={product.description}
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  )
}

export default UpdateProduct
