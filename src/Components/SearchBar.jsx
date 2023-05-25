import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className='flex relative border-none  items-center '>
            <AiOutlineSearch className='text-gray-600 mt-[6px]  ml-2 absolute' />
            <input placeholder='serch here ' type="serch" className='px-6 lg:w-96  py-2 bg-white w-full  text-black rounded-2xl focus:border-none' />
        </div>
    );
};

export default SearchBar;