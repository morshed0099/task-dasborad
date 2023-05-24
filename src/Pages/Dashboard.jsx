
import MonthWiseGraph from "../Components/MonthWiseGraph";
import OrderTable from "../Components/OrderTable";
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
            <div>
                <div className="flex gap-6">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] mt-6 bg-[#8884d8]  h-[30px] "></div>
                        <h3 className="text-2xl font-bold mt-5">Invest</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] mt-6 bg-[#82ca9d]  h-[30px] "></div>
                        <h3 className="text-2xl font-bold mt-5">Revinue</h3>
                    </div>
                </div>
                <MonthWiseGraph />
            </div>
            <div>
                <OrderTable />
            </div>
        </div>
    );
};

export default Dashboard;

