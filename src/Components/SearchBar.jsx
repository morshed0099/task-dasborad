import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className='flex relative  items-center border'>
            <AiOutlineSearch className='text-gray-600  ml-2 absolute' />
            <input placeholder='serch here ' type="serch" className='px-6 lg:w-72 md: py-2 bg-white  text-black rounded-2xl focus:border-none' />
        </div>
    );
};

export default SearchBar;