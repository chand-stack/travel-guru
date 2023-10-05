import Nav from "./Nav";
import { AiFillStar } from 'react-icons/ai';
import hotel from '../assets/Rectangle 26.png'
import hotelone from '../assets/Rectangle 27.png'
import hoteltwo from '../assets/Rectangle 28.png'
import map from '../assets/image.jpg'



const Hotel = () => {
    return (
        <>
         <div  className="border-b"><Nav></Nav></div>
        <div className=" flex flex-col items-center mt-5 lg:flex-row justify-evenly">

            <div>
                <h1 className="text-2xl font-bold">Stay In Hotel</h1>
                <div className=" md:flex my-3 gap-2">
                    <img className="h-52" src={hotel} alt="" />
                    <section className="flex flex-col">
                        <h1 className="text-lg font-medium flex-grow">Light bright airy stylish apt & safe 
peaceful stay</h1>
<p className="flex-grow">4 guests   2 bedrooms   2 beds   2 baths</p>
<p className="flex-grow">Wif Air conditioning Kitchen</p>
<p className="flex-grow">Cancellation fexibility availiable</p>
<p className="flex gap-1  items-center"><AiFillStar className="text-orange-400"/>4.9 (20)  $34/night</p>
                    </section>
                </div>
                <div className="md:flex mb-3 gap-2">
                    <img className="h-52" src={hotelone} alt="" />
                    <section className="flex flex-col">
                        <h1 className="text-lg font-medium flex-grow">Light bright airy stylish apt & safe 
peaceful stay</h1>
<p className="flex-grow">4 guests   2 bedrooms   2 beds   2 baths</p>
<p className="flex-grow">Wif Air conditioning Kitchen</p>
<p className="flex-grow">Cancellation fexibility availiable</p>
<p className="flex gap-1  items-center"><AiFillStar className="text-orange-400"/>4.9 (20)  $34/night</p>
                    </section>
                </div>
                <div className="md:flex gap-2">
                    <img className="h-52" src={hoteltwo} alt="" />
                    <section className="flex flex-col">
                        <h1 className="text-lg font-medium flex-grow">Light bright airy stylish apt & safe 
peaceful stay</h1>
<p className="flex-grow">4 guests   2 bedrooms   2 beds   2 baths</p>
<p className="flex-grow">Wif Air conditioning Kitchen</p>
<p className="flex-grow">Cancellation fexibility availiable</p>
<p className="flex gap-1  items-center"><AiFillStar className="text-orange-400"/>4.9 (20)  $34/night</p>
                    </section>
                </div>
            </div>

            <img src={map} alt="" />

        </div>
        </>
    );
};

export default Hotel;