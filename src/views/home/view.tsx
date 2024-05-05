import Logo from "../../assets/images/img_gai.png";
import "./home.scss";
import QueueCard from "../../components/queueCard";
import { appStore } from "../../store";
import { useEffect } from "react";

const Home = () => {
  const { list, getList } = appStore();

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getList();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex  items-center bg-[#004138] py-[3px]">
        <div className="w-[300px] flex items-center justify-center">
          <img src={Logo} className="w-[200px] h-[200px]" alt="" />
        </div>
        <p className="text-center text-[65px] mr-[100px] text-white">
          Электронная очередь / Elektron navbat
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-[5px] h-[91vh]">
        <div className="bg-[#ffffff]">
          <div className="bg-[#DB0000] flex items-center justify-center py-[20px]  text-white">
            <p className="uppercase text-[50px]">ожидание / kutish </p>
          </div>
          <div className="imgBanner h-[70vh] bg-contain bg-center">
            <div className="mt-[20px] card-container pl-[15px] ">
              {/* <QueueCard
                title="A"
                section="MIB"
                num={100}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="B"
                section="MAb"
                num={101}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="C"
                section="Kassa"
                num={2}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="A"
                section="MIB"
                num={100}
                bg="#DB0000"
                textBg="#DB0000"
              />
              <QueueCard
                title="B"
                section="MAb"
                num={101}
                bg="#DB0000"
                textBg="#DB0000"
              /> */}
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff]">
          <div className="bg-[#2EA006] flex items-center justify-center py-[20px]  text-white">
            <p className="uppercase text-[50px]">
              обслужиется / xizmat ko'rsatilmoqda
            </p>
          </div>
          <div className="imgBanner h-[70vh] bg-contain bg-center">
            <div className="mt-[20px] card-container pl-[15px] ">
              {list.map((item: any) => (
                <QueueCard
                  title="A"
                  section="MIB"
                  num={item?.number}
                  bg="#2EA006"
                  textBg="#2EA006"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
