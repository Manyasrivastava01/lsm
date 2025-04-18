
import React, { useState } from "react";
import Image from "../assets/Logo1.png";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [foodoptions, setFoodOption] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();

  const handleSubmit = () => {
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      foodoptions.trim() === "" ||
      age.trim() === "" 
    ) {
      setSubmitted(true);
    } else {
      // Reset submitted state
      setSubmitted(false);
      // Perform signup action or redirection
      console.log("Signing up...");
      history("/user");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-[#FFF2F2] overscroll-y-none">
        <div className="flex-1 flex justify-center items-center">
        <img  className="w-3/4 max-w-[900px] transition-transform transform scale-125 hover:scale-150"  src={Image} alt="" />
        </div>
        <div className="flex-1 bg-white mx-64 my-36 flex-cols border-2 border-pink-300">
          <div className="px-16 pt-8 text-4xl font-bold">SignUp</div>
          <div className="px-16 pt-8 font-bold">
            Enter Username or Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="username"
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="px-16 pt-4 font-bold">
            Enter Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="px-16 pt-8 font-bold">
            Vegetarian or Non-vegetarian
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="foodoptions"
              type="text"
              placeholder="Vegetarian or Non-vegaterian"
              value={foodoptions}
              onChange={(e) => setFoodOption(e.target.value)}
            />
          </div>
          <div className="px-16 pt-4 font-bold flex flex-rows gap-x-4">
            <div className="flex-1">
              Enter Age
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="age"
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            
          </div>
          {submitted &&
            (username.trim() === "" ||
              password.trim() === "" ||
              age.trim() === "") && (
              <div className="px-16 pt-2 text-red-600">
                Please fill all fields
              </div>
            )}
          <div className="flex flex-rows gap-x-4 px-16 py-16">
            <div className="flex-1">
              <button
                className="border-2 border-black py-2 w-full rounded-full"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
