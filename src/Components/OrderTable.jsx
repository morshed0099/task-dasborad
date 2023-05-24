import React from 'react';

const OrderTable = () => {
    return (
    
            <div className="overflow-x-auto w-full">
                <table  className="table text-primary w-full">
                    {/* head */}
                    <thead className='color-table border'>
                        <tr className='border'>
                            <th></th>
                            <th className='border'>Name</th>
                            <th  className='border'>Job</th>
                            <th  className='border'>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th  className='border'>1</th>
                            <td  className='border'>Cy Ganderton</td>
                            <td  className='border'>Quality Control Specialist</td>
                            <td  className='border'>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
    );
};

export default OrderTable;