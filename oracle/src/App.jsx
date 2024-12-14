import Input from './components/Input'
import './App.css'
import SelectAge from './Pages/SelectAge'
import { useForm } from "react-hook-form";
function App() {

  // use react-form-library for handle form 
  const { register, handleSubmit } = useForm();

  // heres we handle all the form data 
  const UserDetails = (data) => {
  console.log(data);
  }

  return (
    <>
 
    <div className=' w-80 rounded-md bg-gray-700 px-5 py-10'>
        <h1 className='text-center text-white text-2xl capitalize '>Dashboard</h1>
        <form
        onSubmit={handleSubmit(UserDetails)}
        className='flex flex-col gap-5 mt-5'>
          {
            // use all the components
          }
        <Input
        placeholder={"Enter your name"}
        type={"text"} 
        lable={'Name : '}
        {...register("name", {
          required: true,
        })}
        />
        
        <SelectAge register={register}/>

        <Input
        type="file"
        lable="File : "
        {...register("file", {
          required: true,
        })}
        />

        <Input
        type="submit"
        placeholder="Submit"
        className="w-full h-9 rounded-lg cursor-pointer text-white font-medium bg-red-400"
        />
        
        </form>
    </div>
    </>
  )
}

export default App
