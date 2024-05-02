import { useEffect } from "react";
import Logo from "../../assets/images/img_gai.png";
import { appStore } from "../../store";
import "./home.scss";

const Home = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  const { list, getList } = appStore();

  useEffect(() => {
    const interval = setInterval(() => {
      getList();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <div className="w-[70%] !shadow-2xl">
        <div className="flex justify-between px-[15px]  h-[5%] bg-[#F6F6F7] items-center">
          <img
            className="w-[150px] h-[80px] object-contain"
            src={Logo}
            alt=""
          />
          <div>
            <p className="text-[40px] font-bold text-end"> {showTime}</p>
            <p className="text-[25px] font-bold">03.05.2024</p>
          </div>
        </div>
        <div className="p-[20px] logo-container flex items-center justify-center text-white bg-[black] ">
          <img
            className="w-[100%] max-h-[400px] object-contain"
            src={Logo}
            alt=""
          />
        </div>
      </div>
      <div className="w-[30%]  flex flex-col gap-y-[10px]  bg-[#F6F6F7] p-[20px]">
        {list?.map((item: any) => (
          <div className="grid  grid-cols-2   h-[350px] rounded-[20px] shadow-inner bg-[green] p-[20px]">
            <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
              <p className="text-[45px]  px-[35px] py-[20px] font-bold">
                {item?.number}
              </p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-[45px]  text-white !m-0">Operator</p>
              <p className="text-[25px] text-white !m-0"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
