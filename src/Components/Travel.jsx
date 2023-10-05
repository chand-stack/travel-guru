import { useLoaderData } from "react-router-dom";
import TravelDetail from "./TravelDetail";

import Header from "./Header";
import { useState } from "react";

const Travel = () => {
    const [bg,setBg]=useState("https://i.ibb.co/tKfjvXz/Rectangle-1.png")

    const bghandler= img => {
        setBg(img)
    }

    const data = useLoaderData()
  

    return (
        <div className="" style={{backgroundImage:`url(${bg})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
            <div className="h-screen" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <Header></Header>
            {
                <TravelDetail data={data} bghandler={bghandler}></TravelDetail>
            }
            </div>
        </div>
    );
};

export default Travel;