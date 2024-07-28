import { Link } from "react-router-dom";
import { ICate, IProduct } from "../interface/product";
import Banner from "../Component/banner";
import { useEffect, useState } from "react";
import { instance } from "../Apis";

type Props = { product: IProduct[]; onDel: (id: number) => void };

const Home = ({ product, onDel }: Props) => {
  const [categories, setCategory] = useState<ICate[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await instance.get('/category');
      setCategory(data);
    };
    fetchData();
  }, []);

  const getCategoryName = (categoryId: number) => {
    const category = categories.find(category => category.id === categoryId);
    return category ? category.name : 'Unknown';
  };
  return (
    
    <div>
        <div>
            <h1 className="font-bold text-4xl ">Danh sách sản phẩm </h1>
    
        </div>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        
        <thead className="ltr:text-left rtl:text-right ">
            <tr>
                <td><Link to='add' className=" inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Add</Link></td>
            </tr>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              #
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Image
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr className="*:text-center *:border-b " key={index} >
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.title}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <img src={item.image} alt={item.title} width="100px" />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {getCategoryName(item.categoryId)}
              </td>
              <td>
                <button
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  onClick={() => onDel(item.id!)}
                >
                  delete
                </button>
                <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ml-[20px]">
                  <Link to={`edit/${item.id}`}>Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
