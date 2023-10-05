import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

const TravelDetail = ({data,bghandler}) => {
    // console.log(data);

    const [banner,setBanner] = useState("COX'S BAZAR")
    const [bannerInfo,setBannerInfo] = useState("Longest natural sandy sea beach, breathtaking views, vibrant local culture, and water sports galore.")

    const [travelId,setTravelId] = useState(`/trave/1`)
 
    const hoverHandler = (title,details,img,trvId) => {
        setBanner(title)
        setBannerInfo(details)
        bghandler(img)
        setTravelId(trvId)
    }

    return (
        <div className="grid md:grid-cols-2 items-center gap-3">
            <div className="px-5 space-y-3">
                <h1 className="text-4xl lg:text-8xl md:text-5xl font-medium text-white">{banner}</h1>
                <p className="text-white text-2xl font-medium">{bannerInfo}</p>
               <Link to={travelId}><button className="btn btn-secondary bg-yellow-400 text-black border-none">Booking <BsArrowRight className="font-bold text-2xl"></BsArrowRight></button></Link> 
            </div>

            <div>
            <div className="carousel rounded-box w-4/5 md:w-full gap-5 md:px-6">
  {
    data?.map((item) => <Link to={`/trave/${item.id}`} key={item.id} className="carousel-item w-1/2">
    <img onMouseOver={()=>hoverHandler(item?.name,item?.details,item?.img,`/trave/${item.id}`)} src={item.img} className="w-full hover:border-yellow-400 border-4 rounded-[30px]"/></Link>
  )
  } 
</div>
            </div>
        </div>
    );
};

export default TravelDetail;