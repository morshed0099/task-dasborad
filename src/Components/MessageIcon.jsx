import { TiMessages } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const MessageIcon = () => {
    return (
        <div>
           <Link to='/message'> <TiMessages className='text-black text-5xl shadow-md hover:text-blue-700 rounded-md' /></Link>
        </div>
    );
};

export default MessageIcon;