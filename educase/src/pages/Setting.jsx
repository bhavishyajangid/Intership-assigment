import { Camera } from "lucide-react"; // using lucide-react for camera icon

const Setting = () => {
  return (
    <div className="bg-gray-100 h-full w-full">
      {/* Heading */}
      <div className="py-3 bg-white">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Account Settings
        </h2>
      </div>

      <div className="flex flex-col items-start gap-4 p-3 rounded-xl">
        {/* Profile Image with camera overlay */}
        <div className="flex items-start gap-7  ">
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxId1FBHW-OWjf5AEnHyknOwwJ4lMgpqMpg&s" // Replace with real profile pic
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
            <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full shadow hover:bg-purple-700 transition">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* User Details */}

        <p className="text-sm text-gray-600 mt-2">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Setting;
