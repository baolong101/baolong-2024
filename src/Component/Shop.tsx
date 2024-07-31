import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faArrowCircleRight, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { IProduct, ICate } from "../interface/product";
import { instance } from "../Apis";

type Props = {};

const Shop = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICate[]>([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      const { data } = await instance.get('/categories');
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch products by selected category
    const fetchProducts = async () => {
      const { data } = await instance.get(
        id ? `/products?categoryId=${id}` : '/products'
      );
      setProducts(data);
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      <main>
        <div className="w-full mt-[120px] h-[1350px]">
        <div className="w-[25%] float-right mt-[60px]">
              <h1 className="text-[28px] font-medium ml-[0px]">Kategorien</h1>
              <div className="*:ml-[80px] *:text-left">
                <p>
                  <input type="checkbox" name="" id="" />{" "}
                  <span>Eckige Töpfe</span>
                </p>
                <p>
                  <input type="checkbox" name="" id="" />{" "}
                  <span>Runde Töpfe</span>
                </p>
                <p>
                  <input type="checkbox" name="" id="" />{" "}
                  <span>Untersetzer</span>
                </p>
                <p>
                  <input type="checkbox" name="" id="" />{" "}
                  <span>Pflanzschalen</span>
                </p>
              </div>
              <div>
                <div>
                  <div className="mt-[300px]">
                    <img
                      className="ml-[40px] mt-[30px]"
                      src="src/assets/sidebar.png"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-[#0A0A0A] bg-opacity-40 h-[261px] w-[208px] mt-[-263px] px-4 ml-[-46px]">
                      <h1 className="text-white items-center font-bold ml-[12px] text-[25px] text-left">
                        Schlammkuchen
                      </h1>
                      <h1 className="text-white items-center text-left py-[180px] text-[15px]">
                        Shop Now{" "}
                        <span>
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------ */}
                <div>
                  <div className="w-[210px]">
                    <h1 className="text-[18px] font-bold mt-[10px] text-left ml-[40px]">
                      Filter By price
                    </h1>
                    <input
                      className="ml-[40px] w-full h-[3px] bg-[#4E7C32] rounded-lg appearance-none cursor-pointer"
                      type="range"
                    />
                  </div>
                  <div className="flex justify-between w-[210px]  ml-[40px]">
                    <div>From $0 to $8000</div> <div>Filter</div>
                  </div>
                </div>
                {/* ------------------------------ */}
                <div>
                  <div className="w-[210px]">
                    <h1 className="text-[18px] font-bold mt-[10px] text-left ml-[40px]">
                      Filter By size
                    </h1>
                    <input
                      className="ml-[40px] w-full h-[3px] bg-[#4E7C32] rounded-lg appearance-none cursor-pointer"
                      type="range"
                    />
                  </div>
                  <div className="flex justify-between w-[210px]  ml-[40px]">
                    <div>2 mm by 50</div> <div>Filter</div>
                  </div>
                </div>
              </div>
            </div>
          <div className="w-[970px] mx-auto mt-[20px] flex justify-between rounded-[6px]">
            {categories.map(category => (
              <Link to={`/shop/${category.id}`} key={category.id}>
                <div
                  className={`w-[190px] h-[57px] items-center bg-[#D2E8CD] flex justify-around ${
                    category.id === parseInt(id || '') ? 'bg-[#4E7C32] text-white' : ''
                  }`}
                >
                  <span>
                    <img src={`src/assets/category${category.id}.png`} alt="" />
                  </span>
                  <span>{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-[70px] h-[500px]">
            
            <article className="w-[70%] float-left">
              <div className="w-[90%] mx-auto text-left flex">
                <div className="flex items-center">
                  <h1>Sort By: </h1>
                  <span className="border border-gray text-gray-400 w-[200px] px-[10px] rounded-lg ml-[15px] h-[40px] mt-[-10px]">
                    <select name="sort" id="sort">
                      <option value="">default</option>
                      <option value="">default</option>
                      <option value="">default</option>
                    </select>
                  </span>
                </div>
                <div className="flex items-center ml-[20px]">
                  <h1>Show: </h1>
                  <span className="border border-gray text-gray-400 w-[200px] px-[10px] rounded-lg ml-[15px] h-[40px] mt-[-10px]">
                    <select name="show" id="show">
                      <option value="">default</option>
                      <option value="">default</option>
                      <option value="">default</option>
                    </select>
                  </span>
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-3 flex-wrap justify-between mx-auto text-left mt-[20px]">
                  {products.slice(0, 12).map(item => (
                    <div key={item.id} className="border-2 border-gray-400 shadow-xl rounded-md h-[380px] w-[260px] overflow-hidden">
                      <Link to={`/detail/${item.id}`}>
                        <div className="w-[250px] h-[270px] group mx-auto relative mt-[5px]">
                          <img
                            className="mx-auto  h-[270px] rounded-md"
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="flex w-[150px] justify-between mx-auto hidden group-hover:flex absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
                            <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                              <FontAwesomeIcon icon={faRecycle} />
                            </p>
                            <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                              <FontAwesomeIcon icon={faBagShopping} />
                            </p>
                            <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                              <FontAwesomeIcon icon={faHeart} />
                            </p>
                          </div>
                        </div>
                        <div className="mt-[30px] *:ml-[10px]">
                          <h1 className="text-[20px] font-bold">{item.title}</h1>
                          <p className="text-[13px]">
                            <span className="text-red-500 text-[18px] font-semibold ">${item.price}</span>
                            <span className="line-through ml-[13px]">$48.00</span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
