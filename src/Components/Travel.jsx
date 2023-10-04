import { useLoaderData } from "react-router-dom";
import TravelDetail from "./TravelDetail";
import bgImg from '../assets/rectangle1.png'
import Header from "./Header";

const Travel = () => {

    const data = useLoaderData()
  

    return (
        <div className="" style={{backgroundImage:`url(${bgImg})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
            <div className="h-screen" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <Header></Header>
            {
                <TravelDetail data={data}></TravelDetail>
            }
            </div>
        </div>
    );
};

export default Travel;