import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";

const TravelInfo = () => {
    const[travel,setTravel]=useState({})

    const data = useLoaderData();
    const paramsm = useParams();

    const newData = data?.find(item => parseFloat(item.id) === parseFloat(paramsm.id))
    
    useEffect(()=>{
        setTravel(newData)
    },[newData])
    
    return (
        <div className="" style={{backgroundImage:`url(${travel.img})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
            <div className="h-fit" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <Header></Header>

                <div className="grid lg:grid-cols-2 py-20 gap-3 items-center">

                <div className="px-5">
                <h1 className="text-4xl lg:text-8xl md:text-5xl font-medium text-white">{travel.name}</h1>
                <p className="text-white text-2xl font-medium">{travel?.info}</p>
            </div>

            <div>
                <div className="hero lg:bg-white lg:w-4/5 rounded-xl">
  <div className="hero-content flex-col ">
    <div className="text-center ">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Origin</span>
          </label>
          <input type="text" placeholder="Origin" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input type="text" placeholder="Destination" className="input input-bordered" required />
          <label className="label">
            <p className="text-xl font-medium">Form <br /> <br /> <input type="date" /></p>
            <p className="text-xl font-medium">To <br /> <br /><input type="date" /></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <Link to="/hotel"><button className="btn btn-primary bg-yellow-400 border-none text-black">Start Booking</button></Link>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
                </div>
            
            </div>
        </div>
    );
};

export default TravelInfo;