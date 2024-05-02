import { useEffect } from "react";
import Logo from "../../assets/images/img_gai.png";
import { appStore } from "../../store";

const Home = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  const { list, getList } = appStore();

  useEffect(() => {
    setTimeout(() => {
      getList();
    }, 10000);
  }, []);

  return (
    <div className="flex">
      <div className="h-screen w-[70%] !shadow-2xl">
        <div className="flex justify-between px-[20px]  h-[130px] bg-[#F6F6F7] items-center">
          <img
            className="w-[100px] h-[100px] object-contain"
            src={Logo}
            alt=""
          />
          <div>
            <p className="text-[35px] font-bold text-end"> {showTime}</p>
            <p className="text-[20px] font-bold">01.05.2024</p>
          </div>
        </div>
        <div className="p-[20px] flex items-center justify-center text-white bg-[black] h-[100vh]">
          <img
            className="w-[500px] h-[500px] object-contain"
            src={Logo}
            alt=""
          />
        </div>
      </div>
      <div className="w-[30%] h-[100vh] shadow-2xl flex flex-col gap-y-[10px]  bg-[#F6F6F7] p-[20px]">
        {list.map((item: any) => (
          <div className="grid  grid-cols-2 rounded-[8px] shadow-inner bg-[green] p-[20px]">
            <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
              <p className="text-[45px]  px-[35px] py-[20px] font-bold">
                {item.number}
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-[20px] text-white !m-0">Nomer</p>
              <p className="text-[60px] text-white !m-0">3</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
