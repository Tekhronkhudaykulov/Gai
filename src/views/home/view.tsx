const Home = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  return (
    <div className="flex">
      <div className="h-screen w-[70%]">
        <div className="flex justify-between px-[20px]  h-[80px] bg-[#F6F6F7] items-center">
          <p className="text-[35px]">Logo</p>
          <div>
            <p className="text-[35px] font-bold text-end"> {showTime}</p>
            <p className="text-[20px] font-bold">01.05.2024</p>
          </div>
        </div>
        <div className="p-[20px] flex items-center justify-center text-white bg-[black] h-[100vh]">
          <div>
            <p className="text-[35px]">logo</p>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-y-[10px]  bg-[#F6F6F7] p-[20px]">
        <div className="grid  grid-cols-2 rounded-[8px] shadow-inner bg-[green] p-[20px]">
          <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
            <p className="text-[45px]  px-[35px] py-[20px] font-bold">Y49</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-[20px] text-white !m-0">Nomer</p>
            <p className="text-[60px] text-white !m-0">3</p>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-[8px] shadow-inner bg-[green] p-[20px]">
          <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
            <p className="text-[45px]  px-[35px] py-[20px] font-bold">Y49</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-[20px] text-white !m-0">Nomer</p>
            <p className="text-[60px] text-white !m-0">3</p>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-[8px] shadow-inner bg-[green] p-[20px]">
          <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
            <p className="text-[45px]  px-[35px] py-[20px] font-bold">Y49</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-[20px] text-white !m-0">Nomer</p>
            <p className="text-[60px] text-white !m-0">3</p>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-[8px] shadow-inner bg-[green] p-[20px]">
          <div className="flex items-center bg-[white] rounded-[8px] justify-center ">
            <p className="text-[45px]  px-[35px] py-[20px] font-bold">Y49</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-[20px] text-white !m-0">Nomer</p>
            <p className="text-[60px] text-white !m-0">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
