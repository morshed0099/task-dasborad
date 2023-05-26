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
                   
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>price</th>
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
                     
                        <tr>

                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>2750</td>
                            <td>pending</td>
                            <td>27.04.23</td>
                        </tr>
                     
                        <tr>

                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>3850</td>
                            <td>success</td>
                            <td>20.04.23</td>
                        </tr>
                     
                        <tr>

                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>3900</td>
                            <td>sucess</td>
                            <td>22.05.23</td>
                        </tr>
                    </tbody>
                </table>
                <tfoot>                   
                    <div className=' mt-3 flex justify-center'>
                        <div className="btn-group">
                            <button className="btn btn-active">1</button>
                            <button className="btn">2</button>
                            <button className="btn">3</button>
                            <button className="btn">4</button>
                        </div>
                    </div> 
                </tfoot>
            </div>
        </>

    );
};

export default OrderTable;