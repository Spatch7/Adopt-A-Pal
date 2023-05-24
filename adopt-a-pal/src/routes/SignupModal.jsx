import { React, useState } from "react";
import { IoClose } from "react-icons/io5";

function SignupModal(props) {
  const signupModal = props.signupModal;
  const handleClose = props.handleSignupModal;

  const goToLogin = () => {}

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!signupModal) return null;

  const handleSignUp = async(event) => {
    event.preventDefault();
    const signupUrl = '/api/users';
    const info = {
      firstname,
      lastname,
      address,
      city,
      state,
      phone,
      email,
      password
    };
    // console.log(info);

    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("API RESPONSE =", data);
        //  IN PROGRESS: HANDLE LOGIN AND REDIRECT
      }
      
    } catch (error) {
      // Handle any errors during signup process
      console.error("Sign Up error:", error);
    }
  }

  return (
    <>
      <div className="fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white rounded-[35px] min-w-[30rem] px-8 pt-6 pb-10 opacity-95">
          {/* CLOSE BUTTON */}
          <div className="flex justify-end">
            <IoClose onClick={() => handleClose(false)} />
          </div>
          <div className="p-6 space-y-2 md:space-y-4 sm:p-8 flex flex-col justify-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-[#714949]">
              Create Account
            </h1>
            <form className="space-y-4" onSubmit={handleSignUp}>
              {/* Input for First Name  */}
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="capitalize bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setFirstName(e.target.value)} // Updates state variable on change
              />

              {/* Input for Last Name */}
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="capitalize bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setLastName(e.target.value)} // Updates state variable on change
              />

              {/* Input for Address */}
              <input
                type="text"
                name="addresss"
                id="addresss"
                placeholder="Street Address"
                className="capitalize bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setAddress(e.target.value)} // Updates state variable on change
              />

              {/* Input for City */}
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="capitalize bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setCity(e.target.value)} // Updates state variable on change
              />

              {/* Input for State */}
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State"
                maxlength="2"
                className="bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setState(e.target.value)} // Updates state variable on change
              />

              {/* Input for Phone Number */}
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                maxlength="9"
                className="bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setPhone(e.target.value)} // Updates state variable on change
              />

              {/* Input for Email */}
              <input
                type="email"
                name="email"
                id="email"
                className=" border border-[#9F9F9F] text-[#714949] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)} // Updates state variable on change
              />

              {/* Input for Password */}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-[#9F9F9F] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   placeholder-gray-400 text-[#714949] focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={(e) => setPassword(e.target.value)} // Updates state variable on change
              />

              <button
                type="submit"
                className="w-full mt-2 text-white font-medium px-4 py-2 rounded-full bg-[#F2968F] hover:bg-[#ef8e87] "
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?
                <a
                  href=""
                  className="font-medium hover:underline text-[#EE765E]"
                >
                  {" "}
                  Login{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupModal;
