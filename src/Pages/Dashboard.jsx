
import MonthWiseGraph from "../Components/MonthWiseGraph";
import ScoreCard from "../Components/ScoreCard";

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
            <div className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    dataName.map(data => <ScoreCard
                        data={data}
                        key={data.id}

                    />)
                }

            </div>
            <div className="w-full h-[100vh]">
                <MonthWiseGraph />
            </div>
        </div>
    );
};

export default Dashboard;

