import React, { useState } from 'react'
import { productType } from '~/types/product'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

type Props = { products: productType[]; onDel: (id: number) => void };

const Dashboard = ({ products, onDel }: Props) => {
  console.log(products)
  return (
    <div>
      <div className='overflow-x-auto rounded-lg border border-gray-200'>
        <h1>Quản lí sản phẩm</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th className='w-[20%]'>
                <Link to='/admin/addProduct'>
                  <Button variant='primary'>Add</Button>{' '}
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className='align-middle'>{item.title}</td>
                <td>
                  <img src={item.thumbnail} alt={item.title} />
                </td>
                <td className='align-middle'>{item.price}</td>
                <td className='align-middle'>{item.description}</td>
                <td className='align-middle w-[20%]'>
                <button className="btn btn-danger" onClick={() => onDel(item.id)}>
                  Delete
                </button>
                  <Button variant='danger'>
                    <Link className='text-white font-semibold' to={`/admin/update/${item.id}`}>
                      View
                    </Link>
                  </Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard
