// src/components/Card.jsx


export default function MiniCard({ title, value, icon: Icon  , subTittle = false}) {
  return (
    <div className="bg-card-primary p-4 rounded-2xl w-full flex flex-col gap-2 cursor-pointer transition-shadow duration-300 hover:shadow-sm hover:shadow-cyan">
      <div className="flex gap-2 items-center bg-[#41414167] w-fit px-3 py-1 rounded-sm">
        <Icon className="text-white text-[15px] " />
        <p className="text-gray-400 text-xs">{title}</p>
      </div>
      <div className="flex flex-col  gap-2">
         <h1 className="text-lg font-semibold  ">$ 313,042.67</h1>
         {
           !subTittle ? <div className="flex items-center gap-2 ">
            <span className="text-green-400 text-[10px] font-medium   rounded-full bg-green-900/20 ">
              ↑ 2.35% &nbsp; $719.99
            </span>
          </div> : <p className="text-xs text-gray-400">{subTittle}</p>
         }
          
        
      </div>
    </div>
  );
}
