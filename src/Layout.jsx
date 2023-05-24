import {RxDashboard} from 'react-icons/rx'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex p-4 flex-col">
                    <Outlet />
                    <label htmlFor="my-drawer-2"  className="btn btn-primary  lg:hidden">x</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gradient-to-t from-blue-600  to-blue-900 text-base-content">

                        <li>
                       <NavLink to='/'><RxDashboard className='text-white' />Dashborad</NavLink>
                        </li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Layout; 