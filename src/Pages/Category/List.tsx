import React from 'react'
import { ICate } from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {category: ICate[], delCa:(id:number) =>void}

const ListCstegory = ({category, delCa}: Props) => {
  return (
    <div>
        <div className="w-[105%] ml-[-16px] *:py-[55px] mt-[-20px] h-[150px] items-center text-center bg-gray-400 py-auto">
            <h1 className="font-bold text-4xl ">Danh sách danh mục </h1>
    
        </div>
      <table className="min-w-full divide-y-2 mt-[30px] divide-gray-200 bg-white text-sm">
        
        <thead className="ltr:text-left rtl:text-right ">
            <tr>
                <td><Link to='addCate' className=" inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Add</Link></td>
            </tr>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              #
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              name
            </th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, index) => (
            <tr className="*:text-center h-[40px] *:border-b" key={index} >
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.name}
              </td>
              <td>
                <button
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  onClick={() => delCa(item.id!)}
                >
                  delete
                </button>
                <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 ml-[20px]">
                  <Link to={`editCate/${item.id}`}>Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListCstegory