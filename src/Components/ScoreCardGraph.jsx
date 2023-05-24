import { ResponsiveContainer, AreaChart, Area } from 'recharts';

const ScoreCardGraph = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 100,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 2398,
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
            pv: 2508,
            amt: 2000,
        },
        
    ];
    
    return (
      
            <ResponsiveContainer width={100} height={30} >
                <AreaChart  data={data}>
                <Area type="monotone" dataKey="pv" stroke="red" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        
    );
};

export default ScoreCardGraph;