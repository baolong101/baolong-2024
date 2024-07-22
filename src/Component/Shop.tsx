import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import {
  faArrowCircleRight,
  faCircleRight,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type Props = {};

const Shop = (props: Props) => {
  return (
    <>
      <main>
        <div className="h-[1400px] ">
          <div className=" h-[100px] bg-gradient-to-r from-shop-left to-shop-right">
            <h1 className="text-[27px] mx-auto w-[970px] text-left font-semibold py-[30px]">
              Töpfe & Behälter
            </h1>
          </div>
          {/* --------------------------------------------- */}
          <div className="w-[970px] mx-auto mt-[20px] flex justify-between *:rounded-[6px]">
            <div className="w-[190px] h-[57px] items-center bg-[#D2E8CD] flex justify-around">
              <span>
                <img src="src/assets/htgyr 1.png" alt="" />{" "}
              </span>
              <span>Eckige Töpfe</span>
            </div>
            <div className="w-[190px] h-[57px] items-center bg-[#D2E8CD] flex justify-around">
              <span>
                <img src="src/assets/hthrt_2.png" alt="" />{" "}
              </span>
              <span>Runde Töpfe</span>
            </div>
            <div className="w-[190px] h-[57px] items-center bg-[#D2E8CD] flex justify-around">
              <span>
                <img src="src/assets/htgyr 3.png" alt="" />{" "}
              </span>
              <span>Untersetzer</span>
            </div>
            <div className="w-[190px] h-[57px] items-center bg-[#D2E8CD] flex justify-around">
              <span>
                <img src="src/assets/htgyr 4.png" alt="" />{" "}
              </span>
              <span>Pflanzschalen</span>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className=" mt-[70px] ] h-[500px] ">
            <aside className="w-[25%] float-right ">
              <h1 className="text-[28px] font-medium ml-[-50px]">Kategorien</h1>
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
                  <div className="">
                    <img
                      className="ml-[40px] mt-[30px]"
                      src="src/assets/sidebar.png"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-[#0A0A0A] bg-opacity-40 h-[261px] w-[208px] mt-[-263px] px-4 ml-[-13px]">
                      <h1 className="text-white items-center font-bold text-[25px] text-left">
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
            </aside>
            <article className="w-[70%] float-left ">
              <div className="w-[90%] mx-auto *:text-left flex">
                <div className="flex *:item-center">
                  <h1>Sort By: </h1>
                  <span className="*:border *:border-gray *:text-gray-400 *:w-[200px] *:px-[10px] *:rounded-lg ml-[15px] *:h-[40px] mt-[-10px]">
                    <select name="" id="">
                      <option value="">default</option>
                      <option value="">default</option>
                      <option value="">default</option>
                    </select>
                  </span>
                </div>
                <div className="flex *:item-center ml-[20px]">
                  <h1>Show: </h1>
                  <span className="*:border *:border-gray *:text-gray-400 *:w-[200px] *:px-[10px] *:rounded-lg ml-[15px] *:h-[40px] mt-[-10px]">
                    <select name="" id="">
                      <option value="">default</option>
                      <option value="">default</option>
                      <option value="">default</option>
                    </select>
                  </span>
                </div>
              </div>
              {/* ---------------------------------------------------------- --------------------------------------------------------------*/}
              <div className="w-[90%] mx-auto ">
                <div className="flex justify-between mx-auto *:text-left mt-[20px]">
                  <div>
                    <Link to={'/deltail'}>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop10.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                    </Link>
                  </div>
                  {/* ---------------------- ---------------------------------------------------------------------------------------------------*/}
                  <div>
                  <Link to={'/deltail'}>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop1.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                    </Link>
                  </div>
                  {/* ---------------------- */}
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop3.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- */}
                </div>
                {/* ------------------------------- */}
                <div className="flex justify-between mx-auto *:text-left mt-[20px]">
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop4.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- ---------------------------------------------------------------------------------------------------*/}
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop5.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- */}
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop6.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- */}
                </div>
                {/* ------------------------------- */}
                <div className="flex justify-between mx-auto *:text-left mt-[20px]">
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop7.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- ---------------------------------------------------------------------------------------------------*/}
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop8.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- */}
                  <div>
                    <div className="w-[230px] h-[270px] group">
                      <img
                        className="mx-auto "
                        src="src/assets/shop9.png"
                        alt=""
                      />
                      {/* ------------- */}
                      <div className="flex w-[150px] justify-between mt-[-120px] mx-auto hidden  group-hover:flex">
                        <p className="w-[40px] h-[40px] bg-white text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faRecycle} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-[#4E7C32] text-white text-center py-[9px]">
                          <FontAwesomeIcon icon={faBagShopping} />
                        </p>
                        <p className="w-[40px] h-[40px] bg-white *:text-[#4E7C32] text-center py-[9px]">
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </div>
                    </div>
                    <h1 className="text-[16px] font-bold">
                      Square cultivation pots{" "}
                    </h1>
                    <p className="text-[15px] ">
                      <span>$38.00</span>{" "}
                      <span className="line-through">$48.00</span>
                    </p>
                  </div>
                  {/* ---------------------- */}
                </div>
                {/* ------------------------------- */}
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
