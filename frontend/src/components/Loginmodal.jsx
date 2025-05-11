import React from 'react'
import { useState } from 'react';

function Loginmodal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login logic
        if (email === 'user@example.com' && password === 'password') {
        console.log(email, password);
        console.log('Login successful');
        setIsLoggedIn(true);
        } else {
        alert('Invalid email or password');
        }
    };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-gradient-to-br from-white via-slate-100 to-white shadow-2xl rounded-2xl p-8 w-full max-w-md transition-transform duration-300">
                <h2 className="text-3xl font-extrabold text-indigo-600 mb-6 text-center">
                  Enroll in Book
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input input-bordered w-full bg-white text-blue-500 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="input input-bordered w-full bg-white text-blue-500 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md"
                      onClick={() =>
                        document.getElementById('my_modal_3').close()
                      }
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
    </div>
  )
}

export default Loginmodal
