import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
function Registermodal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Perform registration logic here
    const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
    }
    await axios.post("http://localhost:4001/user/register", userInfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            // alert("Sucessfully registerd")
            // toast.success("Message", {
            //     position: "top-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     pauseOnHover: true,
            //     draggable: true,
            //     theme: "colored"
            // });
            toast.success("Successfully registered ✅");
            setTimeout(() => {
              document.getElementById("my_modal_2").close();
              localStorage.setItem("users", JSON.stringify(res.data.user));
            }, 3000);
        }
        
    })
    .catch((err)=>{
        if(err.response){
            console.log(err)
            // alert("Error:" + err.response.data.message)
            toast.error("Error:" + err.response.data.message);
        }
        
    })
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-slideIn">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full bg-sky-50/10 text-gray-900 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="input input-bordered w-full bg-sky-50/10 text-gray-900 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input input-bordered w-full bg-sky-50/10 text-gray-900 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                onClick={() => document.getElementById('my_modal_2').close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary text-white font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-900 mt-6">
            Already have an account?{" "}
            <a onClick={() => {document.getElementById('my_modal_3').showModal();
              document.getElementById("my_modal_2").close()}
            }
             className="text-sky-100 hover:underline font-medium cursor-pointer">
              Log in
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Registermodal;
