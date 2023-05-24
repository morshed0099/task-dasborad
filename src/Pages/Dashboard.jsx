import MessageIcon from "../Components/MessageIcon";
import ProfileIcon from "../Components/ProfileIcon";
import ScoreCard from "../Components/ScoreCard";
import SearchBar from "../Components/SearchBar";
import {AiOutlineMenuUnfold} from 'react-icons/ai'

const Dashboard = () => {

    const dataName = [
        {
            id: 1,
            title: 'Total visitor',
            amount: 40000,
            color: "green-300"

        },
        {
            id: 2,
            title: 'Total Amount Sale',
            amount: '60000',
            color: "cyan-300"
        },
        {
            id: 3,
            title: "Total Order",
            amount: 55000,
            color: "gray-300"
        },
        {
            id: 4,
            title: "Total Cost",
            amount: 2000,
            color: "orange-300"
        }
    ]
    return (
        <div>
            <div className='pb-4 flex justify-between items-center'>
                <div className="lg:hidden ">
                    <label htmlFor="my-drawer-2" className=" lg:hidden"><AiOutlineMenuUnfold className="text-blue-700 cursor-pointer text-4xl hover:text-blue-900" /></label>
                </div>
                <SearchBar />
                <div className="flex gap-6">
                    <MessageIcon />
                    <ProfileIcon />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    dataName.map(data => <ScoreCard
                        data={data}
                        key={data.id}

                    />)
                }

            </div>
        </div>
    );
};

export default Dashboard;

