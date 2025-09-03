import React, { useState } from "react";
import Input from "../components/Input";
import Btn from "../components/btn";
import { Link } from "react-router-dom";

const Signup = () => {
  // ✅ Manage radio value here
  const [agency, setAgency] = useState("Yes"); // default Yes selected

  return (
    <div className="h-full relative">
      <h1 className="font-bold text-2xl">Create your PopX account</h1>

      <form className="space-y-4 mt-5 relative flex flex-col gap-3">
        <Input label={"Full Name"} placeholder={"Enter Your Name"} />
        <Input label={"Phone Number"} placeholder={"Enter Your Phone Number"} />
        <Input label={"Email Address"} placeholder={"Enter Your Email Address"} />
        <Input label={"Password"} placeholder={"Enter Your Password"} />
        <Input label={"Company Name"} placeholder={"Enter Your Company Name"} />

        {/* ✅ Controlled Radio Input */}
        <Input
          label={"Are You An Agency"}
          type="radio"
          name="agency"
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
          required
        />
      </form>
      <Link to={'/setting'}>
        <Btn label={"Create Account"} className={"absolute bottom-3 bg-[#8852f5] text-white"} />
      </Link>
    </div>
  );
};

export default Signup;
