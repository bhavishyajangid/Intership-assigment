import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { setOtpSend, setUser } from "../../store/userSlice";
import OtpVerifyCom from "../../components/OtpVerifyCom";
import { toast } from "react-toastify";
const Signup = () => {
  const dispatch = useDispatch()
   const {otpSend , otpVerify} = useSelector(state => state.userSlice)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
      if(!otpVerify) return alert('first verify otp ')

        let newObj = {
          ...data,
          id : Math.floor(Math.random() * 50)
        }
        localStorage.setItem(data.email , JSON.stringify(newObj))
      dispatch(setUser(newObj))
      toast.success("User Created Sucessfully")
  };

  const handleOtpSend = () => {
     dispatch(setOtpSend())
     toast.success('Otp Generated sucessfully')
  }

  

  return (
    <div className="max-w-sm  w-96  m-auto p-5 bg-gray-200 rounded-lg">
      <h1 className="text-[clamp(1.5rem,1.8vw,5rem)] font-semibold mb-10">
        Sign up
      </h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        action=""
        className="flex flex-col gap-4"
      >
        <Input
          placeholder={"Name"}
          {...register("name", { required: "Name is required" })}
          error={errors.name?.message}
        />

        <Input
          placeholder={"Email"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
        />

        <Input
          placeholder={"Password"}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "password must be 8 character long",
            },
          })}
          error={errors.password?.message}
        />

        <div className="flex  flex-col">
          <Input
            maxLength="10"
            placeholder={"Number"}
            {...register("tel", {
              required: "Number is required",
              pattern: {
                value: /^[0-9]{10}$/, // Only exactly 10 digits
                message: "Please enter a valid phone number (10 digits)",
              },
            })}
            error={errors.tel?.message}
            registerSelect={register("countryCode", {
              required: "country code is required",
            })}
            type={"tel"}
          />
          {
            (watch("tel")?.length === 10 && !otpSend && !otpVerify)  && <div className="flex justify-end items-center"> <span onClick={() => {handleOtpSend()}} className="text-[13px] w-fit cursor-pointer text-right text-orange-400 mr-4 mt-1">
            Verify
          </span>
          </div>
          }
          
        </div>

        {(otpSend && !otpVerify )&& (
          <OtpVerifyCom/>
        )}
        <Button className="mt-10" label={"Sign up"} />
      </form>
      <div className="text-center text-xs mt-3">
        <p className=" text-gray-600">
          Already have an account?
          {/* <Link to="/login"> */}
          <span className="text-blue-500 hover:underline"> Log in</span>
          {/* </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Signup;
