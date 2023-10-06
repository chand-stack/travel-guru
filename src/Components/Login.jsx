import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { AiOutlineLine } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Login = () => {
  const {loginUser,googleLogin} = useContext(AuthContext)

  const location = useLocation()
  console.log(location);

  const navigate = useNavigate()

  const loginHandler = e => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    console.log(email,password);

    loginUser(email,password)
    .then(result => {
      console.log(result.user)
      e.target.reset()
      navigate(location?.state || "/")
    })
    .catch(error => {
      console.log(error)
    })
  }

  const googleHandler = () => {
    googleLogin()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

    return (
        <div>
            <Nav></Nav>
            
            <div className=" md:w-1/2 mx-auto mt-10">
  <div className="flex-col ">
    <div className="text-center ">
    </div>
    <div className="card flex-shrink-0 w-full border-2 rounded-none bg-base-100">
      <form onSubmit={loginHandler} className="card-body lg:p-20">
      <h1 className="text-3xl font-bold text-start">Login now!</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email"
           placeholder="email"
           name="email"
           className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" 
          placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <div className="flex justify-between items-center">
          <label className="label">
            <Link className=" font-semibold text-yellow-500 underline">Forgot password?</Link>
          </label>
          <label className="font-semibold">
            <input type="checkbox" name="" id="" /> Remember Me
          </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary border-none bg-yellow-400 text-black">Login</button>
        </div>
        <p className="font-medium text-center">Do not have an account? <Link to="/register" className="text-yellow-500 underline">Create an account</Link></p>
      </form>
      
    </div>
  </div>
</div>

<div className="flex items-center justify-center text-lg font-semibold my-5">
<span className="flex items-center"><AiOutlineLine/><AiOutlineLine/><AiOutlineLine/><AiOutlineLine/></span>Or<span className="flex items-center"><AiOutlineLine/><AiOutlineLine/><AiOutlineLine/><AiOutlineLine/></span>
</div>

<div className="flex justify-center my-3">
    <button className="font-semibold w-1/3 rounded-full btn-outline border-gray-300 btn text-xl flex items-center gap-2"><BsFacebook className="text-4xl text-sky-500"/><span className="px-10 flex-1">Continue With Facebook</span></button>
</div>
<div className="flex justify-center">
    <button onClick={googleHandler} className="font-semibold w-1/3 rounded-full btn-outline border-gray-300 btn text-xl flex items-center gap-2"><FcGoogle className="text-4xl"/><span className="px-10 flex-1">Continue With Google</span></button>
</div>

        </div>
    );
};

export default Login;