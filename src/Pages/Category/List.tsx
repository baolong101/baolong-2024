import React from 'react'
import { ICate } from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {category: ICate[], delCa:(id:number) =>void}

const ListCstegory = ({category, delCa}: Props) => {
  return (
    <div>
        <div>
            <h1 className="font-bold text-4xl ">Danh sách danh mucj </h1>
    
        </div>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        
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
            <tr className="*:text-center *:border-b" key={index} >
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