    
import InputOrDate from "../../componenets/CommunityEnthCompo/InputOrDate";
export default function CommunityEnthu() {


  return (
    <div className="max-w-[450px] mx-auto p-4 bg-white min-h-screen text-gray-700 flex flex-col gap-4 ">
        
       
      <InputOrDate/>

      <div className="space-y-10 ">
        {[1, 2].map((_, idx) => (
          <div
            key={idx}
            className=" rounded-lg p-4 grid grid-cols-2 gap-4 text-center shadow-md mt-10"
          >
            <div>
              <p className="text-2xl font-medium text-gray-900">0</p>
              <p className="text-sm text-gray-500">Total Registered Member</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-900">0</p>
              <p className="text-sm text-gray-500">Total Valid Member</p>
            </div>
            <div className=" pt-2">
              <p className="text-xl font-medium text-gray-900">0</p>
              <p className="text-sm text-gray-500">Member A</p>
            </div>
            <div className=" pt-2">
              <p className="text-xl font-medium text-gray-900">0</p>
              <p className="text-sm text-gray-500">Valid A</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
