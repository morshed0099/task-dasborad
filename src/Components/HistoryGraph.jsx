import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const HistoryGraph = () => {
    const data = [
        {
            name: 'T-shirt',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Pant',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Shoes',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },

    ];

    return (
                 
                <BarChart width={100} height={70} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>        
    );
};

export default HistoryGraph;