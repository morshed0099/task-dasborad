import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import { AiFillFilter } from 'react-icons/ai';

const OrderTable = () => {
    const [open, setopen] = useState(false)


    const [value, onChange] = useState([new Date(), new Date()]);


    const handelCange = (e) => {
        console.log(e.target.value)
    }


    {
        value &&

            (new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(value[0]))
    }

    const hadelFrom = () => {
        setopen(false)
    }
    return (

        <>
            {
                open && <div className='flex justify-center items-center w-full h-full'>

                    <DateRangePicker onChange={onChange} value={value} />
                    <button className='text-red-800 ml-2 font-bold' onClick={hadelFrom}>Cancel</button>
                </div>
            }
            <div className="overflow-x-auto w-full">
                <table className="table  table-zebra w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>
                                <select onChange={(e) => handelCange(e)} className='p-2 rounded-md select-info w-full'>
                                    <option value="status" selected disabled>Status</option>
                                    <option value='pending'>Pending</option>
                                    <option value='success' >Success</option>
                                </select>
                            </th>
                            <th><button className='flex hover:text-red-900 items-center gap-1' onClick={() => setopen(!open)}><AiFillFilter />Date </button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>25/05/23</td>
                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>

                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
                <tfoot>
                    <th>
                    <div className=' mt-3 flex justify-center'>
                        <div className="btn-group">
                            <button className="btn btn-active">1</button>
                            <button className="btn">2</button>
                            <button className="btn">3</button>
                            <button className="btn">4</button>
                        </div>
                    </div>
                    </th>
                    
                </tfoot>
            </div>
        </>

    );
};

export default OrderTable;