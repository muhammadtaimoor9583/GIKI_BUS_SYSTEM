import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Re_password: "",
    position: "student",
    username:Number,
  });

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({ firstName, lastName, password, position,email,username }) => {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        credentials:'include',
        body: JSON.stringify({ firstName, lastName, password, position, email, username }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      return data;
    },
    onError: (data) => {
      toast.error(data.error || data.message);
    },
    onSuccess: () => {
      toast.success("Account created succesfully");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('cliked')
    const { firstName, lastName, email, password, position,username } = formData;
    mutate({ firstName, lastName, email, password, position ,username});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  return (
    <div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center w-full">
            <img src="/assets/images/img_group_29.svg" alt="logo" />
          </div>
          <p className="mt-10 text-lg leading-8 text-gray-600">
            Welcome to Raah-e-Safar
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto  max-w-xl mt-5">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlhtmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-black"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  id="first-name"
                  autocomplete="given-name"
                  placeholder="Enter your first name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-900 ring-1 ring-inset ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  id="last-name"
                  autocomplete="family-name"
                  placeholder="Enter your last name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="email"
                  autocomplete="organization"
                  placeholder="Enter your email address"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Registration Number
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="number"
                  name="username"
                  id="username"
                  autocomplete="organization"
                  placeholder="Enter your reg number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Password
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="email"
                  placeholder="Enter your password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Password
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  name="Re_password"
                  id="password"
                  placeholder="Re-enter your password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                ></input>
                <div className="text-red-600"></div>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <button
                  type="button"
                  className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="switch-1-label"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
              <label
                className="text-sm leading-6 text-gray-600"
                id="switch-1-label"
              >
                By selecting you agree our{" "}
                <a href="#" className="font-semibold text-red-600">
                  privacy&nbsp;policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              onClick={handleSubmit}
              className="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // disabled={ !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.Re_password || !formData.position || formData.password !== formData.Re_password}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center w-full flex-col">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="text-blue-800 underline ">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
