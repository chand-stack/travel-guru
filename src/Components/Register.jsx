import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLine } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser,userDetail,googleLogin} = useContext(AuthContext)
   
    const navigate = useNavigate()

const registerHandler = e =>{
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    const firstName = e.target.fname.value 
    const lastName = e.target.lname.value 

    createUser(email,password)
    .then(result => {
        userDetail(`${firstName} ${lastName}`)
        .then(()=>{console.log('updated')})
        .catch(error => {console.log(error)})
        console.log(result.user)
        e.target.reset()
        navigate("/")
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
            <Nav/>

            <div className=" md:w-1/2 mx-auto mt-10">
  <div className="flex-col ">
    <div className="text-center ">
    </div>
    <div className="card flex-shrink-0 w-full border-2 rounded-none bg-base-100">
      <form onSubmit={registerHandler} className="card-body lg:p-20">
      <h1 className="text-3xl font-bold text-start">Create an account</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">First Name</span>
          </label>
          <input type="text" name="fname" placeholder="First Name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Last Name</span>
          </label>
          <input type="text" name="lname" placeholder="Last Name" className="input input-bordered w-full" required />
        </div>
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
          
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary border-none bg-yellow-400 text-black">Create an account</button>
        </div>
        <p className="font-medium text-center">Already have an account? <Link to="/login" className="text-yellow-500 underline">Login</Link></p>
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

export default Register;