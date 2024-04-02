import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { productType } from '~/types/product'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().required().min(6)
})

type Props = {
  onUpdate: (product: productType) => void
}

const UpdateProduct = ({ onUpdate }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<productType | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<productType>({
    resolver: joiResolver(schemaProduct)
  })

  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  }, [])

  const onSubmit = (data: productType) => {
    onUpdate({...data, id})
  }
  return (
    <div>
      {product && (
        <section className='relative flex flex-wrap lg:h-screen lg:items-center mt-[-30px]'>
          {/* hình ảnh */}
          <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 '>
            <img src={product.thumbnail} alt={product.title} className='absolute inset-0 w-auto object-cover mt-24' />
          </div>
          {/* nội dung */}
          <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
            <div className='mx-auto max-w-lg text-center'>
              <h1 className='text-2xl font-bold sm:text-3xl'>Chi tiết sản phẩm</h1>
            </div>

            <form className='mx-auto mb-0 mt-8 max-w-md space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className='relative'>
                  <p className='text-left'>Name</p>
                  <input
                    className='form-control'
                    type='text'
                    {...register('title', { required: true })}
                    defaultValue={product?.title}
                  />

                  {errors.title && <span className='text-danger'>{errors.title.message}</span>}
                </div>
              </div>

              <div>
                <div className='relative'>
                  <p className='text-left'>Price</p>
                  <input
                    className='form-control'
                    type='number'
                    id='price'
                    {...register('price', { required: true })}
                    defaultValue={product?.price}
                  />
                  {errors.price && <span className='text-danger'>{errors.price.message}</span>}
                </div>
              </div>

              <div>
                <div className='relative'>
                  <p className='text-left'>Description</p>
                  <input
                    className='form-control'
                    type='text'
                    {...register('description', { required: true, minLength: 6 })}
                    defaultValue={product?.description}
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <button
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
