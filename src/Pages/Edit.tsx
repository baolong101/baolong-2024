import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { instance } from '../Apis';
import { ICate, IProduct } from '../interface/product';

type Props = {onEdit: (product: IProduct)=>void }
const Schemma = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  price: Joi.number().required().min(0),
  categoryId: Joi.number()
});
const Edit = ({onEdit}: Props) => {
  const {id}:any= useParams()
  const [product, setProduct] = React.useState<IProduct | null>(null);

  const [categories, setCategory] = useState<ICate[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await instance.get('/category');
      setCategory(data);
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: joiResolver(Schemma),
  });
  useEffect(()=>{
    (async()=>{
      const {data}= await instance.get(`/products/${id}`)
      // setProduct(res.data)
      reset({
        title: data.title,
        image: data.image,
        price: data.price,
        categoryId: data.categoryId,
      })
    })()
  },[])

 

  const onSubmit = (data: IProduct) => {
    onEdit({...data, id});
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
           Sửa sản phẩm
          </h1>

          <div>
            <div className="relative">
              <p className="text-left">Nhập tên sản phẩm</p>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="name..."
                {...register("title")}
              />
              {errors.title && 
                <p className="text-red-500">{errors.title.message}</p>
              }
            </div>
          </div>

          <div>
            <div className="relative">
              <p className="text-left">Nhập image sản phẩm</p>
              <div><img src={product?.image} alt="" className='w-[100px]'/></div>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="image..."
                {...register("image")}
              />
              {errors.image && 
                <p className="text-red-500">{errors.image.message}</p>
              }
            </div>
          </div>

          <div>
            <div className="relative">
              <p className="text-left">Nhập giá sản phẩm</p>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="price..."
                {...register("price")}
              />
              {errors.price && 
                <p className="text-red-500">{errors.price.message}</p>
              }
            </div>
          </div>

          <div>
            <div className="relative">
              <p className="text-left">Chọn danh mục</p>
              <select
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                {...register("categoryId")}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit