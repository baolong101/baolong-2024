import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate= useNavigate()
  return (
    <div className="fixed top-0 h-[120px] text-[14px] bg-black opacity-80 w-full bg-gradient-to-r from-custom-left to-custom-right z-50 ">
      {/* --------------------top-header--------------------- */}
      <div className=" flex justify-around h-[65px] w-[970px] border-b border-1 border-[#E3E3E3] mx-auto">
        {/* input --------------------- */}
        <div className="w-[70%] ">
          <input
            className="w-[440px] h-[39px] mt-[17px]  rounded-lg ml-[110px]"
            type="text"
            placeholder="      Suchen Sie nach Produkten, Marken und mehr"
          />{" "}
          <span className="ml-[-25px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
        {/* account--------------------- */}
        <div className="flex items-center w-[30%]">
          <div className="text-white ml-[-12px]">
            <select className="bg-transparent *:text-black" name="" id="">
            <option value="">En</option>
            <option value="">Vn</option>
            </select> </div>
          <div className="text-white ml-[110px]">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            <Link to='/admin'>Account</Link>
          </div>
          <div className="text-white ml-[32px]">
            <span>
              <FontAwesomeIcon icon={faBagShopping} />
            </span>{" "}
            cart
          </div>
        </div>
      </div>
      {/* -----------bootom-header----------------------- */}
      <div className="flex justify-around w-[970px] mx-auto *:text-white mt-[10px] ">
        <div className="bg-none">
        <select  onChange={(e) => navigate(e.target.value)}
      defaultValue="/shop" className="bg-transparent *:text-black" id="slt" name="Töpfe & Behälter" value="/">
            <option value="/">Beleuchtung</option>
            <option value="/">Beleuchtung</option>
          </select>
        </div>
        <div className="bg-none">
          <select className="bg-transparent *:text-black" name="">
            <option value="">Beleuchtung</option>
            <option  value="">Komplettsets</option>
          </select>
        </div>
        <div className="bg-none">
          <select className="bg-transparent" name="">
            <option value="">Growbox</option>
          </select>
        </div>
        <div className="bg-none">
          <select className="bg-transparent" name="">
            <option value="">Dünger</option>
          </select>
        </div>
        <div className="bg-none">
          <select className="bg-transparent" name="">
            <option value="">Erde & Substrate</option>
          </select>
        </div>
        <div className="bg-none">
          <select  onChange={(e) => navigate(e.target.value)}
      defaultValue="/shop" className="bg-transparent *:text-black" id="slt" name="Töpfe & Behälter" value="Töpfe & Behälter">
            <option id="slt" value="shop">Töpfe & Behälter</option>
            <option id="slt" value="shop">Töpfe & Behälter</option>
            <option id="slt" value="shop">Runde Töpfe</option>
            <option id="slt" value="Untersetzer">Untersetzer</option>
            <option id="slt" value="Eckige Töpfe">Eckige Töpfe</option>
            <option id="slt" value="Pflanzschalen">Pflanzschalen</option>
          </select>
        </div>
        <div className="bg-none">
          <select className="bg-transparent" name="">
            <option value="">Pflanzen & Gärtnern </option>
          </select>
        </div>
        <div className="bg-none">
          <select className="bg-transparent" name="">
            <option value="">Lüftung & Klimaanlage</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
