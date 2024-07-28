import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main className="bg-[#F8F4F0] h-[1800px] ">
      <div className="text-left w-[1000px] h-[76px] mx-auto">
        <h1 className="text-[30px] font-bold text-[#505F4E] py-[30px]">
          best sellers
        </h1>
      </div>

      <div className="bg-white h-[431px]">
        <div className="w-[970px] mx-auto flex justify-between">
          {/* ----------------------------------- */}
          <div className="w-[208px] h-[355px] py-[40px] overflow-hidden">
            <div className="h-[261px] w-[208px]">
              <img src="src/assets/sellers1.png" alt="" />
            </div>
            <div className="text-left">
              <h1 className="text-[14px] font-semibold">Growbox</h1>
              <p className="*:text-[13px] flex justify-between">
                <span>5 by 5 pots for planting</span> <span>$ 6130.00</span>
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="w-[208px] h-[355px] py-[40px] overflow-hidden">
            <div className="h-[261px] w-[208px]">
              <img src="src/assets/sellers.png" alt="" />
            </div>
            <div className="text-left">
              <h1 className="text-[14px] font-semibold">Growbox</h1>
              <p className="*:text-[13px] flex justify-between">
                <span>5 by 5 pots for planting</span> <span>$ 6130.00</span>
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="w-[208px] h-[355px] py-[40px] overflow-hidden">
            <div className="h-[261px] w-[208px]">
              <img src="src/assets/sellers2.png" alt="" />
            </div>
            <div className="text-left">
              <h1 className="text-[14px] font-semibold">Growbox</h1>
              <p className="*:text-[13px] flex justify-between">
                <span>5 by 5 pots for planting</span> <span>$ 6130.00</span>
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="w-[208px] h-[355px] py-[40px] overflow-hidden">
            <div className="h-[261px] w-[208px]">
              <img src="src/assets/sellers3.png" alt="" />
              <p className="text-white bg-black w-[50px] h-[20px] text-[10px] mt-[-150px] items-center py-[-4px]  font-normal">
                SALE
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-[14px] font-semibold">Licht</h1>
              <p className="*:text-[13px] flex justify-between">
                <span>Dress</span>{" "}
                <span className="line-through">$ 6130.00</span>
                <span className="text-red-500">$ 1155.00</span>
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
        </div>
      </div>
      {/* ---------------------main1---------------------------- */}
      <div className="h-[550px]">
        <div className="w-[800px] h-[437px] mt-[40px] mx-auto flex justify-between">
          <div className="relative w-[350px] h-auto bg-slate-400">
            <img src="src/assets/garten.png" alt="" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-40 h-[48px] w-[350px] mt-[-350px] px-4 py-2">
                <h1 className="text-black items-center font-bold text-[25px] text-left">
                  Garten Spaten
                </h1>
              </div>
            </div>
          </div>

          <div className="w-[440px] h-full ">
            <div className="h-[210px]  flex justify-between">
              <div className="relative w-[215px]">
                <img src="src/assets/gtgre 1.png" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-40 h-[38px] w-[215px] mt-[-150px] px-4 ">
                    <h1 className="text-black items-center font-bold text-[25px] text-left">
                      Sand
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative w-[215px]">
                <img src="src/assets/ffgdsa 1.png" alt="" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-40 h-[38px] w-[215px] mt-[-150px] px-4 ">
                    <h1 className="text-black items-center font-bold text-[25px] text-left">
                      Pflanzer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------- */}
            <div className="h-[210px] mt-[13px]  flex justify-between">
              <div className="relative w-[215px]">
                <img src="src/assets/gggrrr 1.png" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-40 h-[38px] w-[215px] mt-[-150px] px-4 ">
                    <h1 className="text-black items-center font-bold text-[25px] text-left">
                      Schlammkuchen
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative w-[215px]">
                <img src="src/assets/bfdsA 1.png" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-40 h-[38px] w-[215px] mt-[-150px] px-4 ">
                    <h1 className="text-black items-center font-bold text-[25px] text-left">
                      Klemmen
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------ */}
        <div className="h-[722px] bg-[#F8F4F0]">
          <div className="w-[900px] h-[80px] mx-auto text-left border-b border-1 border-[#E3E3E3]">
            <h1 className="text-[30px] font-bold mt-[40px]">Kategorien</h1>
          </div>
          {/* ---------------------------image------------------------------------ */}
          <div className="610px ">
            <div className="flex justify-around w-[1050px] *:w-[240px]  mx-auto">
              <img src="src/assets/Mask1.png" alt="" />
              <img src="src/assets/Mask2.png" alt="" />
              <img src="src/assets/Mask3.png" alt="" />
              <img src="src/assets/Mask4.png" alt="" />
            </div>
            <div className="flex justify-around w-[1050px] *:w-[240px] mt-[20px] mx-auto">
              <img src="src/assets/1.png" alt="" />
              <img src="src/assets/2.png" alt="" />
              <img src="src/assets/3.png" alt="" />
              <img src="src/assets/4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
