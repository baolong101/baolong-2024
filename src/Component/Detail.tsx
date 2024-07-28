import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Detail = () => {
  // -----------------------quality and totalprice
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 125.0;

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalPrice = (quantity * pricePerUnit).toFixed(2);

  // ---------------------------------image
  const [selectedImage, setSelectedImage] = useState("src/assets/ffef 2.png");
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const images = [
    "src/assets/ffef 2.png",
    "src/assets/ffef 2.png",
    "src/assets/img1.png",
  ];

  const handleThumbnailClick = (index: any) => {
    setSelectedImage(images[index]);
    setSelectedThumbnail(index);
  };
  // ---------------------star
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: any) => {
    setRating(index + 1); // Cập nhật trạng thái với số sao đã chọn
  };
  return (
    <main className="h-[1650px] mt-[120px]">
      {/* -------------top-------------------- */}
      <div className="w-[970px] mx-auto  ">
        <div className="h-[500px] mt-[20px] flex justify-between">
          <div className="w-[460px]">
            <div className="*:w-[78%]  h-[405px] m-auto items-center mx-auto">
              <img src={selectedImage} alt="Main" />
            </div>
            <div className="flex justify-center mt-[10px] space-x-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`border ${
                    selectedThumbnail === index
                      ? "border-black"
                      : "border-transparent"
                  } rounded-[10px] cursor-pointer`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-[80px] px-[10px] py-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[460px] text-left *:mt-[15px]">
            <h1 className="text-[14px] text-[#4E7C32] font-semibold">Plant</h1>
            <h1 className="text-[40px] font-bold">
              Square cultivation pots 0.27 to 2 litres
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <p className="h-[40px] ">
              <span className="text-[26px] font-semibold ">${totalPrice}</span>{" "}
              <span className="px-[10px] py-[5px] ml-[10px] items-center bg-[#FFEDE0] rounded-[5px] my-auto-[-10px]">
                50%
              </span>
            </p>
            <p className="line-through text-[15px] font-semibold">$250.00</p>
            <div className="w-[110px] flex bg-[#F7F8FD] rounded-md">
              <div className="flex justify-between w-[150px] items-center  px-2 py-1 rounded">
                <button
                  onClick={decreaseQuantity}
                  className="text-lg font-bold"
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-[150px] mt-4">
              <button className="w-[200px] px-[5px] py-[10px] bg-[#4E7C32] text-white font-semibold ml-[10px] rounded-[10px]">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="ml-2"> Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------desc----------------------- */}
      <div className="text-left w-[80%] mx-auto mt-[60px] *:mt-[10px]">
        <h1 className="text-[30px] font-semibold text-[#4E7C32]">
          Discription
        </h1>
        <p className="text-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled i
        </p>
      </div>
      {/* -----------about---------------------- */}
      <div className="text-left *:mt-[10px] w-[80%] mx-auto">
        <h1 className="text-[30px] text-[#4E7C32] font-semibold">About</h1>
        <p className="text-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled i
        </p>
      </div>
      {/* ------------------------------------------------------------------------- */}
      <div className="w-[900px] mx-auto h-[450px] mt-[40px]">
        <div className=" mx-auto flex justify-between">
          <div className="w-[400px] flex  *:items-center">
            <div className="w-[170px]">
              <img src="src/assets/ffef 2.png" alt="" />
            </div>
            <div className="*:items:center mt-[75px]">
              <div className="ml-[40px] flex justify-between">
                {/* ---------------đánh giá sao---------------------- */}
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`cursor-pointer ${
                      index < rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleStarClick(index)}
                  />
                ))}
              </div>
              <div className="flex ml-[83px]">
                <div className="text-[#4E7C32] text-[32px]">5.0</div>{" "}
                <div className="text-[17px] mt-[12px] ml-[5px]">(388)</div>
              </div>
            </div>
          </div>
          <div>
            <button className="w-[118px] text-[14px] px-[5px] py-[10px] bg-[#4E7C32] text-white font-semibold ml-[10px] rounded-[40px] mt-[30px]">
              <span className="ml-2">Write reviews </span>
            </button>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="text-left mt-[20px]">
          <div className="flex *:items-center *:ml-[5px]">
            <span className="font-medium text-[20px] w-[10px] text-left">
              1
            </span>
            <span className="text-[12px] mt-[4px]">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <div className="w-[244px] rounded-[2px] mt-[11px] h-[8px] bg-[#A2A0A0]"></div>
            <span className="mt-[7px]">(388)</span>
          </div>
          <div className="flex *:items-center *:ml-[5px]">
            <span className="font-medium w-[10px] text-left text-[20px]">
              2
            </span>
            <span className="text-[12px] mt-[4px]">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <div className="w-[100px] rounded-[2px] mt-[11px] h-[8px] bg-[#A2A0A0] bg-opacity-40"></div>
          </div>
          <div className="flex *:items-center *:ml-[5px]">
            <span className="font-medium w-[10px] text-left text-[20px]">
              3
            </span>
            <span className="text-[12px] mt-[4px]">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <div className="w-[100px] rounded-[2px] mt-[11px] h-[8px] bg-[#A2A0A0] bg-opacity-40"></div>
          </div>
          <div className="flex *:items-center *:ml-[5px]">
            <span className="font-medium w-[10px] text-left text-[20px]">
              4
            </span>
            <span className="text-[12px] mt-[4px]">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <div className="w-[100px] rounded-[2px] mt-[11px] h-[8px] bg-[#A2A0A0] bg-opacity-40"></div>
          </div>
          <div className="flex *:items-center *:ml-[5px]">
            <span className="font-medium w-[10px] text-left text-[20px]">
              5
            </span>
            <span className="text-[12px] mt-[4px]">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <div className="w-[100px] rounded-[2px] mt-[11px] h-[8px] bg-[#A2A0A0] bg-opacity-40"></div>
          </div>
        </div>
        {/* --------------------------------------------------------------- */}
        <div className="w-[1000px]  *:text-left flex flex-wrap justify-between ">
          <div className="w-[400px] h-[100px] mt-[30px]">
            
          </div>
          <div className="w-[400px] h-[100px] mt-[40px]">
            <div className="py-[10px]">
            <span className="text-[#4E7C32] text-[20px]">Aman gupta</span> <span className="text-[11px]">{[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`cursor-pointer text-[10px] ${
                      index < rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleStarClick(index)}
                  />
                ))}</span>
            </div>
            <p className="text-[11px] font-light">
              I've been using this cleanser for about five or six months now and
              my acne is almost completely gone. I really struggled for years
              with my skin and tried everything possible but this is the only
              thing that managed to clear up my skin. 100% recommend and will
              continue to use is for sure.
            </p>
          </div>
          <div className="w-[400px] h-[100px] mt-[30px]">
            <div className="py-[10px]">
            <span className="text-[#4E7C32] text-[20px]">Aman gupta</span> <span className="text-[11px]">{[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`cursor-pointer text-[10px] ${
                      index < rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleStarClick(index)}
                  />
                ))}</span>
            </div>
            <p className="text-[11px] font-light">
              I've been using this cleanser for about five or six months now and
              my acne is almost completely gone. I really struggled for years
              with my skin and tried everything possible but this is the only
              thing that managed to clear up my skin. 100% recommend and will
              continue to use is for sure.
            </p>
          </div>
          <div className="w-[400px] h-[100px] mt-[30px]">
            <div className="py-[10px]">
            <span className="text-[#4E7C32] text-[20px]">Aman gupta</span> <span className="text-[11px]">{[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`cursor-pointer text-[10px] ${
                      index < rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleStarClick(index)}
                  />
                ))}</span>
            </div>
            <p className="text-[11px] font-light">
              I've been using this cleanser for about five or six months now and
              my acne is almost completely gone. I really struggled for years
              with my skin and tried everything possible but this is the only
              thing that managed to clear up my skin. 100% recommend and will
              continue to use is for sure.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[220px]">
        <button className="text-[12px] ml-[650px] bg-[#4E7C32] w-[60px] h-[20px] rounded-lg text-white font-normal items-center text-center">See all</button>
      </div>
    </main>
  );
};

export default Detail;
