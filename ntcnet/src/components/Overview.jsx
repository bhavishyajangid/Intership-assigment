import CardHeading from "./CardHeading";
import OverViewCard from "./OverViewCard";

export default function Overview({data , title}) {
  
  return (
    <div className={`bg-card-primary p-5 max-sm:px-3 rounded-2xl shadow-md ${title == "Income OverView" && "px-0 py-2"}`}>
      {
        title &&  <CardHeading title={title} />
      }
     

      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-hide h-64">
        {data.map((item, index) => (
          <OverViewCard key={index} title={item.title} value={item.value} overview={title} />
        ))}
      </div>
    </div>
  );
}