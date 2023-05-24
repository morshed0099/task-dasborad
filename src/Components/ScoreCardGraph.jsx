import { LineChart, Line, ResponsiveContainer } from 'recharts';

const ScoreCardGraph = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 1200,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 1800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 1508,
            amt: 2000,
        },
        
    ];
    
    return (
      
            <ResponsiveContainer width={100} height={30} >
                <LineChart  data={data}>
                    <Line type="monotoneY" dataKey="pv" stroke="#809658" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        
    );
};

export default ScoreCardGraph;