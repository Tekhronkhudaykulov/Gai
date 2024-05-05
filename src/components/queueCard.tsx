const QueueCard = ({title,num,section, bg, textBg}: any) => {
    return (
        <div className="flex items-center px-[10px]  rounded-[8px]" style={{background: bg}}>
            <div className="bg-white py-[5px] rounded-[12px] px-[26px]">
            <p style={{color:textBg}} className="uppercase text-[100px]">{title}</p>
            </div>
            <div>
                <span className="text-[65px] uppercase font-bold block text-center text-white">{num}</span>
                <div className="h-[5px] w-[100%] bg-white"></div>
                <span className="text-[65px] font-bold uppercase text-white">{section}</span>
            </div>
        </div>
    )
}
export default QueueCard;