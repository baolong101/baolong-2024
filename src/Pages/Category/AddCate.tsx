import React from 'react'
import { ICate } from '../../interface/product';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

type Props = { onAddCate: (product: ICate) => void };
const Schemma = Joi.object({
  name: Joi.string().required().trim(),
});
const AddCate = ({onAddCate}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ICate>({
        resolver: joiResolver(Schemma),
      });
    
      const onSubmit = (data: ICate) => {
        onAddCate(data);
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

export default AddCate