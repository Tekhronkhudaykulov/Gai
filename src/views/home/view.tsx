import { useEffect, useState } from "react";
import Logo from "../../assets/images/img_gai.png";
import { appStore } from "../../store";
import "./home.scss";

const Home = () => {
  const { list, getList } = appStore();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getList();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const timeLocal = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Tashkent" })
  );
  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const List = [
    { operatorId: 1, queue: "F9" },
    { operatorId: 2, queue: "F10" },
    { operatorId: 3, queue: "F11" },
    { operatorId: 4, queue: "F12" },
    { operatorId: 5, queue: "F13" },
    { operatorId: 6, queue: "F14" },
  ];

  return (
    <div className="flex bg-[black]">
      <div className="w-[60%] !shadow-2xl">
        <div className="flex justify-between px-[15px]   bg-[#F6F6F7] items-center">
          <img
            className="w-[150px] h-[80px] object-contain"
            src={Logo}
            alt=""
          />
          <div>
            <p className="text-[40px] font-bold text-end">
              {timeLocal.getHours()}:
              {timeLocal.getMinutes().toString().padStart(2, "0")}
            </p>
            <p className="text-[25px] font-bold">
              {date.getDate()} {monthNames[timeLocal.getMonth()]}
              {date.getFullYear()}
            </p>
          </div>
        </div>
        <div className="p-[20px] logo-container  flex items-center justify-center text-white bg-[black] ">
          <img
            className="w-[100%] max-h-[400px]  object-contain"
            src={Logo}
            alt=""
          />
        </div>
      </div>
      <div
        className={`w-[40%]  grid grid-cols-2 gap-[10px]  bg-[#F6F6F7] p-[20px]`}
      >
        {List.map((item: any) => (
          <div
            className={`grid  grid-cols-2  rounded-[8px] shadow-inner bg-[green] p-[15px]`}
          >
            <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
              <p className="text-[24px]   font-bold">{item.queue}</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-[18px]  text-white !m-0">Operator</p>
              <p className="text-[24px] text-white !m-0">{item.operatorId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
