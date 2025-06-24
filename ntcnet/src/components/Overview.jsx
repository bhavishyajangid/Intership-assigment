import CardHeading from "./CardHeading";
import OverViewCard from "./OverViewCard";

export default function Overview({data , title ,btn}) {
  
  return (
   <div
  className={`relative shadow-[0_6px_30px_rgba(0,0,0,0.7)]  border border-[#2a2f3a] p-5 max-sm:px-3 rounded-2xl  ${title === "Income OverView" && "px-0 py-2 max-lg:w-1/2 max-md:w-full"}`}
>
      {
        title &&  <CardHeading title={title} btn={btn} />
      }
     

      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-hide max-h-96">
        {data.map((item, index) => (
          <OverViewCard key={index} title={item.title} value={item.value} overview={title} />
        ))}
      </div>
    </div>
  );
}