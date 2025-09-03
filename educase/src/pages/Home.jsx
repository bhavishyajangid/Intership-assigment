import React from "react";
import Btn from "../components/btn";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="sm:py-5 absolute  bottom-4 ">
      <Heading />
      <div className="flex flex-col gap-4 mt-5 ">
        <Link to="/signup">
          <Btn label={"Create Account"} className={"bg-[#8852f5] text-white"} />
        </Link>
        <Link to="/login">
          <Btn
            label={"Already Registered? Login"}
            className={"bg-[#e3e1e9] "}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
