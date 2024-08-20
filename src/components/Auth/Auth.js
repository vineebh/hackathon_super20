import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../contexts/authContext";
import { setIsLogin } from "../../store/authSlice";
import { signInUserEmailAndPass, createUserEmailAndPass, signOutUser } from "../../firebase/auth";
import { Navigate } from "react-router";

const Auth = () => {
  const { userLoggedIn } = useAuth();
  const isLogin = useSelector((state) => state.auth.islogin);
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name } = authData;

    try {
      if (isLogin) {
        console.log("Attempting to sign in with:", { email, password });
        await signInUserEmailAndPass(email, password);
      } else {
        console.log("Attempting to sign up with:", { email, password, name });
        await createUserEmailAndPass(email, password);
      }
      dispatch(setIsLogin(true));
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  const toggleAuthMode = () => {
    dispatch(setIsLogin(!isLogin));
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      dispatch(setIsLogin(false));
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to="/home" replace={true} />}
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            {isLogin ? "Login" : "Signup"}
          </h1>
          {userLoggedIn ? (
            <div className="text-center">
              <p className="mb-4">You are logged in!</p>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-800 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={authData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={authData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  value={authData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition duration-300 w-full"
              >
                {isLogin ? "Login" : "Signup"}
              </button>

              <button
                type="button"
                className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition duration-300 w-full my-3"
                onClick={toggleAuthMode}
              >
                {isLogin ? "Don't Have an Account? Signup" : "Already Have an Account? Login"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
