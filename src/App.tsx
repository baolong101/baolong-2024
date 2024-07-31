// src/App.js
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getAll, instance } from "./Apis";
import "./App.css";
import Detail from "./Component/Detail";

import Page from "./Component/page";
import Shop from "./Component/Shop";
import { ICate, IProduct } from "./interface/product";
import AdminLayout from "./Layout/admin/Admin";
import UserLayout from "./Layout/user/Users";
import Add from "./Pages/add";
import AddCate from "./Pages/Category/AddCate";
import EditCate from "./Pages/Category/EditCate";
import ListCstegory from "./Pages/Category/List";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";

function App() {
  const nav = useNavigate();
  const [products, setProduct] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<ICate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAll();
      setProduct(res);
    };
    fetchData();
  }, []);

  // Xóa sản phẩm
  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await instance.delete(`products/${id}`);
      setProduct(products.filter((product) => product.id !== id));
    }
  };

  // Thêm sản phẩm
  const handleAdd = (product: IProduct) => {
    (async () => {
      try {
        const { data } = await instance.post("products", product);
        setProduct([...products, data]);
        alert("Bạn đã thêm thành công sản phẩm mới");
        nav("/admin");
      } catch (error) {
        alert("Lỗi: " + error);
      }
    })();
  };

  // Sửa sản phẩm
  const handleEdit = (product: IProduct) => {
    (async () => {
      const { data } = await instance.put(`/products/${product.id}`, product);
      setProduct(products.map((item) => (item.id === data.id ? data : item)));
      alert("Bạn đã sửa thành công sản phẩm");
      nav("/admin");
    })();
  };

  // -----------------------------------crud categories --------------------------------
  // ---------------------------------list----------------------------------------------
  const loadData=async()=>{
    const {data} = await instance.get('/category');
      setCategory(data);
  }
  useEffect(() => {
    const fetchData = async () => {
      await loadData()
    };
    fetchData();
  }, []);

  // ----------------------------------delete category --------------------------------
  const handleDeleteCate = async (id: number) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await instance.delete(`category/${id}`);
      setCategory(categories.filter((cate) => cate.id !== id));
    }
  };
  // --------------------------------add category--------------------------------------

  const handleAddCate = (cate: ICate) => {
    (async () => {
      try {
        const { data } = await instance.post("category", cate);
        setProduct([...categories, data]);
        alert("Bạn đã thêm thành công danh mục mới");
        await loadData()
        nav("/admin/categories");
      } catch (error) {
        alert("Lỗi: " + error);
      }
    })();
  };

  // ---------------------------------edit category------------------------------------
  const handleEditCate = (category: ICate) => {
    (async () => {
      const { data } = await instance.put(`/category/${category.id}`, category);
      setCategory(categories.map((item) => (item.id === data.id ? data : item)));
      alert("Bạn đã sửa thành công danh mục");
      nav("/admin/categories");
    })();
  };

  return (
    <Routes>
      {/* Routes cho Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Home product={products} onDel={handleDelete} />} />
        <Route path="/admin/add" element={<Add onAdd={handleAdd} />} />
        <Route path="/admin/edit/:id" element={<Edit onEdit={handleEdit} />} />
        <Route path="/admin/categories" element={<ListCstegory category={categories} delCa={handleDeleteCate}/>}/>
        <Route path="/admin/categories/addCate" element={<AddCate  onAddCate={handleAddCate}/>} />
        <Route path="/admin/categories/editCate/:id" element={<EditCate onEditCate={handleEditCate}/>} />
      </Route>

      {/* Routes cho User */}
      <Route path="/" element={<UserLayout />}>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/shop/:id" element={<Shop />} />
        <Route path="/" element={<Page />} />
      </Route>
    </Routes>
  );
}

export default App;
