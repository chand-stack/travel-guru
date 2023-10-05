import { Link } from 'react-router-dom';
import logo from '../assets/frametwo.png'
import { ImMenu } from 'react-icons/im';

const Nav = () => {
    return (
        <>
        <div className='hidden lg:contents bg-transparent text-black'>
        <div className='flex justify-around items-center bg-transparent py-4 '>
           <Link to="/"> <img className='flex-grow-0' src={logo} alt="" /></Link>
            

            
            <Link>News</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
          
            <button className='btn btn-sm bg-yellow-400 border-none text-black'><Link to="/login">Login</Link></button>
        </div>
        </div>

        <div className='lg:hidden bg-transparent text-black'>


        <div className='flex gap-12 bg-transparent md:gap-28 flex-row-reverse px-3 items-center py-4'>
           <Link to="/"> <img className='' src={logo} alt="" /></Link>
           
          
            <button className='btn btn-sm bg-yellow-400 text-black border-none'><Link to="/login">Login</Link></button>

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

export default Nav;