import ScoreCardGraph from "./ScoreCardGraph";




const ScoreCard = ({ data }) => {
    return (
        <div className={`flex justify-between bg-gradient-to-t from-[#82ca9d]  to-[#8884d8] p-4 rounded-md shadow-md   items-center `}>
            <div className="">
                <h5>{data.title}</h5>
                <h2>{data.amount}</h2>
            </div>
            <div>
                <div>
                    <ScoreCardGraph />
                </div>
                <div>
                    <p>
                        20% last week
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ScoreCard;