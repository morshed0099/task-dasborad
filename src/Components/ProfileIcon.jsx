import { Link } from "react-router-dom";

const ProfileIcon = ({ user }) => {
    return (
        <div className='flex gap-2'>

            <Link to='/profile'>
                <img src={`${user?.photoURL? user.photoURL : "data:image/jpeg;base64,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"}`} width={50} height={50} className='rounded-full' alt="profile image" />
            </Link>
            <div className='flex-col items-center text-black'>
                <p>
                    {
                        user ? user?.displayName : <Link to='/login'>Login</Link>
                    }
                </p>
                <p>
                    Admin
                </p>
            </div>
        </div>
    );
};

export default ProfileIcon;