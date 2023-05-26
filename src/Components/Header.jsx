
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import SearchBar from './SearchBar';
import MessageIcon from './MessageIcon';
import ProfileIcon from './ProfileIcon'
import { useContext } from 'react';
import { authUser } from '../AuthProvider';


const Header = () => {
    const {user}=useContext(authUser)
    return (
       
        <div className='pb-4 flex justify-between  items-center'>
            <div className="lg:hidden ">
                <label htmlFor="my-drawer-2" className=" lg:hidden"><AiOutlineMenuUnfold className="text-blue-700 cursor-pointer text-4xl hover:text-blue-900" /></label>
            </div>
            <div className='hidden md:block lg:block'>
                <SearchBar />
            </div>
            <div className="flex gap-6">
                <MessageIcon />
                <ProfileIcon user={user} />
            </div>
        </div>
    );
};

export default Header;