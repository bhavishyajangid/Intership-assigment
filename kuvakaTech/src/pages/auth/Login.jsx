import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onsubmit = (data) => {
    let users = JSON.parse(localStorage.getItem("users" || "[]"));
    const user = users.find((u) => u.email === data.email);

    if (!user) return toast.error("User not found");
    if (user.password !== data.password) return toast.error("Invalid Password");

    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/home");
    dispatch(setUser(user));
    toast.success("Login Sucessfully");
  };

  return (
    <div className="max-w-sm  w-96  m-auto p-5 bg-gray-200 rounded-lg">
      <h1 className="text-[clamp(1.5rem,1.8vw,5rem)] font-semibold mb-10">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        action=""
        className="flex flex-col gap-4"
      >
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
          })}
          error={errors.password?.message}
        />

        <Button className="mt-10" label={"Login"} />
      </form>
      <div className="text-center text-xs mt-3">
        <p className=" text-gray-600">
          Already have an account?
          <Link to="/">
            <span className="text-blue-500 hover:underline"> Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
