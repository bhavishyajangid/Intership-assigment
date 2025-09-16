
import { CiMicrophoneOn } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
const FileInput = ({handleFileChange}) => {
  return (
    <div className="flex justify-between items-center">
          <label className="cursor-pointer">
            <IoIosAdd className="text-3xl text-gray-500" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <button>
            <CiMicrophoneOn className="text-2xl text-gray-500" />
          </button>
        </div>
  )
}

export default FileInput