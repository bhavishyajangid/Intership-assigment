import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import OtpVerifyCom from "../../components/OtpVerifyCom";
import { setOtpSend } from "../../store/userSlice";
import { setCoutryCode } from "../../store/userSlice";
import Loader from "../../components/Loader";
let rooms = [
  {
    id: 0,
    title: "Frontend Development",
    lastMessage: "I fixed the signup form issue 🎉",
    updatedAt: "2025-09-11T18:10:00Z",
    messages: [],
  },
  {
    id: 1,
    title: "Daily Standup",
    lastMessage: "Today's meeting starts in 15 mins",
    updatedAt: "2025-09-10T09:00:00Z",
    messages: [],
  },
];

const Signup = () => {
  const [loader , setLoader] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { otpSend, otpVerify } = useSelector((state) => state.userSlice);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

useEffect(() => {
    const fetchCountryCode = async() => {
      try { 
         const  result = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,idd')
         const res = await result.json()
         dispatch(setCoutryCode(res || []))
      } catch (error) {
          console.log(error);
      }finally{
        setLoader(false)
      }
    }

    fetchCountryCode()
  } , [])


  const onsubmit = (data) => {
    if (!otpVerify) return alert("first verify otp ");

    let newObj = {
      ...data,
      id: Date.now(),
      chatRooms: [...rooms],
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users?.find((user) => user.email == newObj.email)) {
      return toast.error("Email is already register ! Try another email ");
    }

    users.push(newObj);

    localStorage.setItem("users", JSON.stringify(users));
    toast.success("User Created Sucessfully");
    navigate("/login");
  };

  const handleOtpSend = () => {
    dispatch(setOtpSend());
    toast.success("Otp Generated sucessfully");
  };

  if(loader){
    return <Loader/>
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
          {watch("tel")?.length === 10 && !otpSend && !otpVerify && (
            <div className="flex justify-end items-center">
              {" "}
              <span
                onClick={() => {
                  handleOtpSend();
                }}
                className="text-[13px] w-fit cursor-pointer text-right text-orange-400 mr-4 mt-1"
              >
                Verify
              </span>
            </div>
          )}
        </div>

        {otpSend && !otpVerify && <OtpVerifyCom />}

        
        <Button className="mt-10" label={"Sign up"} />
      </form>
      <div className="text-center text-xs mt-3">
        <p className=" text-gray-600">
          Already have an account?
          <Link to="/login">
            <span className="text-blue-500 hover:underline"> Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
