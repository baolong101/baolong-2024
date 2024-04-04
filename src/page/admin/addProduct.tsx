import Joi from "joi";
import { useForm } from "react-hook-form";
import { productType } from "~/types/product";
import { joiResolver } from "@hookform/resolvers/joi";

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})
type Props = {
  onAdd: (product: productType) => void
};

const AddProduct = ({ onAdd }: Props) => {
  const { register, handleSubmit, formState: { errors }, } = useForm<productType>({
    resolver: joiResolver(schemaProduct)
  });
  const onSubmit = (data: productType) => {
    onAdd(data)
  }
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg'>
        <form onSubmit={handleSubmit(onSubmit)} className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Thêm sản phẩm mới</h1>


          <div>
            <div className='relative'>
              <p className='text-left'>Nhập tên sản phẩm</p>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder="title..."
            id="title"
            {...register("title", {required: true})}
              />
              {errors.title && (
            <div className="text-red-500">{errors.title.message}</div>
          )}
            </div>
          </div>
          
          <div>
            <div className='relative'>
              <p className='text-left'>Nhập giá sản phẩm</p>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder="price..."
            id="price"
            {...register("price", {required: true})}
              />
              {errors.price && (
            <div className="text-red-500">{errors.price.message}</div>
          )}
            </div>
          </div>
          <div>
            <div className='relative'>
              <p className='text-left'>Chi tiết sản phẩm</p>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder="description..."
        
                id="description"
                {...register("description")}
              />
              {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
          )}
            </div>
          </div>

          

          <button
            className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
