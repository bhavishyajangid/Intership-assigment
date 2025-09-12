import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
const Signup = () => {
  const [otpSend, setOtpSend] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-sm w-96  m-auto p-5 bg-gray-200 rounded-lg">
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
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          placeholder={"Email"}
          {...register("email")}
          error={errors.name?.message}
        />
        <Input
          placeholder={"Password"}
          {...register("password")}
          error={errors.name?.message}
        />

        <div className="flex  flex-col">
          <Input
            placeholder={"Number"}
            {...register("phone")}
            error={errors.phone?.message}
            registerSelect={register("countryCode")}
            type={"number"}
          />
          <span className="text-[13px] cursor-pointer text-right text-orange-400 mr-4 mt-1">
            Verify
          </span>
        </div>
        
        {otpSend && (
          <div>
            <Input placeholder={"Enter Otp"} />
            <div className="flex justify-between items-center px-4 py-1">
              <span className="text-[13px] cursor-pointer text-right text-orange-400">
                Resend
              </span>
              <span className="text-[13px] cursor-pointer text-right text-orange-400">
                Verify
              </span>
            </div>
          </div>
        )}
        <Button className="mt-10" label={"Sign up"} />
      </form>
    </div>
  );
};

export default Signup;
