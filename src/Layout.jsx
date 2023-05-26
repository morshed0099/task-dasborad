import { RxDashboard } from 'react-icons/rx'
import { BiMessageDetail } from 'react-icons/bi'
import { MdProductionQuantityLimits, MdLogin, MdOutlineLogout } from 'react-icons/md'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useContext } from 'react';
import { authUser } from './AuthProvider';
import { toast } from 'react-hot-toast';
import { AiFillProfile } from 'react-icons/ai';

const Layout = () => {

    const { logout } = useContext(authUser)
    const navigate =useNavigate()

    const handelLogOut = () => {
        logout()
        .then(()=>{
            toast.success('logout success')
            navigate('/login')
        }).catch(error=>{
            console.error(error)
        })

    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex p-4 flex-col">
                    <Header />
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 mb-2 w-80 bg-gradient-to-t  from-[#8884d8] to-[#82ca9d] text-base-content">
                        <label htmlFor="my-drawer-2" className="btn lg:hidden md:hidden  w-[30px] ml-[265px] mb-[30px] btn-sm">x</label>
                        <div className=' border-none block md:hidden mb-4 lg:hidden'>
                            <SearchBar />
                        </div>
                        <li className='mb-2 '>
                            <NavLink className='text-1xl font-bold' to='/'><RxDashboard className=' text-2xl font-bold text-white' />Dashborad</NavLink>
                        </li>
                        <li className='mb-2'>
                            <NavLink className='text-1xl font-bold' to='/message'><BiMessageDetail className='text-2xl font-bold text-white' /> Message</NavLink>
                        </li>
                        <li className='mb-2'>
                            <NavLink className='text-1xl font-bold' to='/product'><MdProductionQuantityLimits className='text-2xl font-bold text-white' />Products</NavLink>
                        </li>
                        <li className='mb-2'>
                            <NavLink className='text-1xl font-bold' to='/login'><MdLogin className='text-2xl  text-white' />Login</NavLink>
                        </li>
                        <li className='mb-2'>
                            <NavLink className='text-1xl font-bold' to='/profile'><AiFillProfile className='text-2xl  text-white' />Profile</NavLink>
                        </li>
                        <li className='mb-2'>
                            <button onClick={handelLogOut} className='text-1xl font-bold'><MdOutlineLogout className='text-2xl font-bold text-white' /> Logout</button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Layout; 