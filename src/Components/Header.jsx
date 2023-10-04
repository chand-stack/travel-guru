import { Link } from 'react-router-dom';
import logo from '../assets/Frame.png'
import { ImMenu } from 'react-icons/im';
const Header = () => {
    return (
        <>
        <div className='hidden lg:contents bg-transparent text-white'>
        <div className='flex justify-around items-center bg-transparent py-4 '>
            <img src={logo} alt="" />
            <input type="text" placeholder="Search Your Destination" className="input input-bordered border-white w-full max-w-xs bg-transparent text-white" />

            
            <Link>News</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
          
            <button className='btn btn-sm bg-yellow-400 border-none text-black'>Login</button>
        </div>
        </div>

        <div className='lg:hidden bg-transparent text-white'>


        <div className='flex gap-5 bg-transparent md:gap-10 px-3 items-center py-4'>
            <img className='flex-1' src={logo} alt="" />
            <input type="text" placeholder="Search Your Destination" className="input input-bordered w-full max-w-xs bg-transparent border-white text-white" />
          
            <button className='btn btn-sm bg-yellow-400 text-black border-none'>Login</button>

            <div className="drawer flex-1">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer" className="btn btn-primary bg-transparent border-yellow-400 drawer-button"><ImMenu className='text-yellow-400 text-2xl'/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      
      <li><Link>News</Link></li>
      <li><Link>Destination</Link></li>
      <li><Link>Blog</Link></li>
      <li><Link>Contact</Link></li>
      
    </ul>
  </div>
</div>
        </div>
        </div>
        </>
    );
};

export default Header;