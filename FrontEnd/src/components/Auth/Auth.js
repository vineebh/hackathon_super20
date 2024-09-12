import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserEmailAndPass, signInUserEmailAndPass, signInWithGoogle } from "../../firebase/auth";
import { setIdToken, setIsLogin, setLoginStatus } from "../../store/authSlice";

const Auth = () => {
  const isLogin = useSelector((state) => state.auth.islogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
    
    if (name === "name" && !isLogin && value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be at least 3 characters long",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (name === "password" && value.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters long",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name } = authData;
    if (!isLogin && name.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be at least 3 characters long",
      }));
      return;
    }

    if (password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters long",
      }));
      return;
    }

    try {
      if (isLogin) {
        const response = await signInUserEmailAndPass(email, password);
        const token = response.user.accessToken;
        localStorage.setItem("idToken", token);
        dispatch(setIdToken(token));
        dispatch(setLoginStatus(true));
        navigate('/home');
      } else {
        const response = await createUserEmailAndPass(email, password);
        const token = response.user.accessToken;
        localStorage.setItem("idToken", token);
        dispatch(setIdToken(token));
        dispatch(setIsLogin(true));
        navigate('/home');
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      setErrors((prevErrors) => ({
        ...prevErrors,
        firebase: error.message,
      }));
    }
  };

  const toggleAuthMode = () => {
    dispatch(setIsLogin(!isLogin));
  };

  const loginWithGoogleHandler = async () => {
    try {
      const result = await signInWithGoogle();
      const token = result.token;
      localStorage.setItem("idToken", token);
      dispatch(setIdToken(token));
      dispatch(setLoginStatus(true));
      dispatch(setIsLogin(true));
      navigate('/home');
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };
  return (
    <div>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                  Full Name

                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={authData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
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
              <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">
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
               {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition duration-300 w-full"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
            <button
              type="button"
              className="px-2 py-3 border border-black bg-red-400 w-full mt-3"
              onClick={loginWithGoogleHandler}
            >
              Login With Google
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition duration-300 w-full my-3"
              onClick={toggleAuthMode}
            >
              {isLogin ? "Don't Have an Account? Signup" : "Already Have an Account? Login"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Auth;