import { useState } from "react";
import { Link } from "react-router-dom";

const TravelDetail = ({data}) => {
    console.log(data);

    const [banner,setBanner] = useState("COX'S BAZAR")
    const [bannerInfo,setBannerInfo] = useState("Longest natural sandy sea beach, breathtaking views, vibrant local culture, and water sports galore.")
 
    const hoverHandler = (title,details) => {
        setBanner(title)
        setBannerInfo(details)
    }

    return (
        <div className="grid md:grid-cols-2 items-center gap-3">
            <div className="px-5">
                <h1 className="text-4xl lg:text-8xl md:text-5xl font-medium text-white">{banner}</h1>
                <p className="text-white text-2xl font-medium">{bannerInfo}</p>
            </div>

            <div>
            <div className="carousel rounded-box w-4/5 md:w-full gap-5 md:px-6">
  {
    data.map((item) => <Link to={`/trave/${item.id}`} key={item.id} className="carousel-item w-1/2">
    <img onMouseOver={()=>hoverHandler(item?.name,item?.details)} src={item.img} className="w-full hover:border-yellow-400 border-4 rounded-[30px]"/></Link>
  )
  } 
</div>
            </div>
        </div>
    );
};

export default TravelDetail;