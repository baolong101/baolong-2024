import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../interface/product";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

type Props = { onAdd: (product: IProduct) => void };
const Schemma = Joi.object({
  title: Joi.string().required().min(6),
  image: Joi.string().required(),
  price: Joi.number().required().min(0),
  desc: Joi.string().required(),
});
const Add = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: joiResolver(Schemma),
  });

  const onSubmit = (data: IProduct) => {
    onAdd(data);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Thêm sản phẩm mới
          </h1>

          <div>
            <div className="relative">
              <p className="text-left">Nhập tên sản phẩm</p>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="name..."
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <p className="text-left">Nhập image sản phẩm</p>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="image..."
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <p className="text-left">Nhập giá sản phẩm</p>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="price..."
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <p className="text-left">Chi tiết sản phẩm</p>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="description..."
                {...register("desc", { required: true })}
              />
              {errors.desc && (
                <p className="text-red-500">{errors.desc.message}</p>
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
  );
};

export default Add;
