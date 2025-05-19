import React, { useState, useEffect } from 'react';
import Bookcard from '../book/Bookcard';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Book() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [books, setBooks] = useState([]);
  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success("Successfully logged in ✅");
        setTimeout(() => {
          localStorage.setItem("users", JSON.stringify(res.data.user));
          setAuthUser(res.data.user); // Set auth user
          document.getElementById("my_modal_3").close();
        }, 4000);
        
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:4001/book');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.warning("Unable to fetch books. Please try again later.");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="">
      {!authUser ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className='border-2 flex flex-col items-center justify-center shadow-lg rounded-2xl p-8 w-auto'>
            <h1 className="text-4xl font-bold">Welcome to the Book Page</h1>
            <p className="mt-4 text-lg">To see all the books please login!</p>
            <div className="mt-8">
              <button
                className="btn btn-secondary bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all hover:scale-105"
                onClick={() => document.getElementById('my_modal_3').showModal()}
              >
                Enroll Now
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 shadow-2xl rounded-2xl p-8 w-full max-w-md">
                  <h2 className="text-3xl font-extrabold text-indigo-600 mb-6 text-center text-white">
                    Enroll in Book
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-5">
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="input input-bordered w-full bg-sky-50/10 text-gray-900 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                      <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="input input-bordered w-full bg-sky-50/10 text-gray-900 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                      />
                      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        className="btn bg-gray-200 hover:bg-gray-300 text-gray-700"
                        onClick={() => document.getElementById('my_modal_3').close()}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {books.map((item) => (
            <Bookcard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Book;
