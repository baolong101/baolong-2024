import React, { useEffect, useState } from 'react'
import { ICate } from '../../interface/product';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { instance } from '../../Apis';
import { useParams } from 'react-router-dom';

type Props = { onEditCate: (product: ICate) => void };
const Schemma = Joi.object({
  name: Joi.string().required(),
});

const EditCate = ({onEditCate}: Props) => {
    const [categories, setCategory] = useState<ICate[]>([]);
    const {id}:any= useParams()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<ICate>({
        resolver: joiResolver(Schemma),
      });
      useEffect(()=>{
        (async()=>{
          const {data}= await instance.get(`/category/${id}`)
          // setProduct(res.data)
          reset({
            name: data.name,
          })
        })()
      },[])
    
      const onSubmit = (data: ICate) => {
        onEditCate({...data,id});
      };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Thêm danh mục mới
      </h1>

      <div>
        <div className="relative">
          <p className="text-left">Nhập tên danh mục</p>
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="name..."
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Add
      </button>
    </form>
  </div>
</div>
  )
}

export default EditCate