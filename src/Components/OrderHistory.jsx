import React, { useState } from 'react';
import HistoryGraph from './HistoryGraph';

const OrderHistory = () => {
    const [activeRoute, setActiveRout] = useState('success')
    return (
        <div className='border border-green-300 rounded-2xl '>
            <div className='mb-2 p-3'>
                <button onClick={() => setActiveRout('success')} className={`btn btn-sm ml-2 ${activeRoute === 'success' && 'btn-primary'}`}>Succes</button>
                <button onClick={() => setActiveRout('pending')} className={`btn btn-sm ml-2 ${activeRoute === 'pending' && 'btn-primary'}`}>Pending</button>
                <button onClick={() => setActiveRout('reject')} className={`btn btn-sm ml-2 ${activeRoute === 'reject' && 'btn-primary'}`}>Reject</button>
            </div>
            <div>
                {
                    activeRoute === 'success' &&
                    <>
                        <div className='border flex  flex-col gap-[40px]  shadow-md p-3 rounded-2xl'>
                            <div>
                                <h2 className='text-2xl font-bold text-black'>Today History</h2>
                            </div>
                            <div>
                                <h4 className='text-black font-semibold text-1xl'>Total Sell</h4>
                                <p className='text-1xl font-bold text-[#8884d8]'>price: $4000</p>
                            </div>
                            <div>
                                <p className='text-black font-semibold text-1xl'>Product Items</p>
                                <div className=' text-[#8884d8] flex justify-between'>
                                    <div>
                                        <div>
                                            <p className='text-black mt-2'>T-shirt</p>
                                            <p>Quantity-480</p>
                                        </div>
                                        <div>
                                            <p className='text-black'>Pant</p>
                                            <p>Quantity-40</p>
                                        </div>
                                        <div>
                                            <p className='text-black'>Shoes</p>
                                            <p>Quantity-100</p>
                                        </div>                                       
                                    </div>
                                    <div className='flex items-end'>
                                        <HistoryGraph />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </>
                }
                {
                    activeRoute === 'reject' &&
                    <>
                        <div className='border flex  flex-col gap-[40px]  shadow-md p-3 rounded-2xl'>
                            <div>
                                <h2 className='text-2xl font-bold text-black'>Today History</h2>
                            </div>
                            <div>
                                <h4 className='text-black font-semibold text-1xl'>Total Order Reject</h4>
                                <p className='text-1xl font-bold text-[#8884d8]'>price: $5000</p>
                            </div>
                            <div>
                                <p className='text-black font-semibold text-1xl'>Product Items</p>
                                <div>
                               
                                <div className=' text-[#8884d8] flex justify-between'>
                                    <div>
                                        <div>
                                            <p className='text-black mt-2'>T-shirt</p>
                                            <p>Quantity-80</p>
                                        </div>
                                        <div>
                                            <p  className='text-black' >Pant</p>
                                            <p>Quantity-00</p>
                                        </div>
                                        <div>
                                            <p className='text-black'>Shoes</p>
                                            <p>Quantity-500</p>
                                        </div>                                       
                                    </div>
                                    <div className='flex items-end'>
                                        <HistoryGraph />
                                    </div>
                                </div>

                            </div>

                            </div>
                        </div>

                    </>
                }
                {
                    activeRoute === 'pending' &&
                    <>
                        <div className='border flex  flex-col gap-[40px]  shadow-md p-3 rounded-2xl'>
                            <div>
                                <h2 className='text-2xl font-bold text-black'>Today History</h2>
                            </div>
                            <div>
                                <h4 className='text-black font-semibold text-1xl'>Total Pending Order</h4>
                                <p className='text-1xl font-bold text-[#8884d8]'>price: $2000</p>
                            </div>
                            <div>
                                <p className='text-black font-semibold text-1xl'>Product Items</p>
                                <div>
                          
                                <div className=' text-[#8884d8] flex justify-between'>
                                    <div>
                                        <div>
                                            <p className='text-black mt-2'>T-shirt</p>
                                            <p>Quantity-80</p>
                                        </div>
                                        <div>
                                            <p className='text-black'>Pant</p>
                                            <p>Quantity-380</p>
                                        </div>
                                        <div>
                                            <p className='text-black'>Shoes</p>
                                            <p>Quantity-00</p>
                                        </div>                                       
                                    </div>
                                    <div className='flex items-end'>
                                        <HistoryGraph />
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>

                    </>
                }
            </div>
        </div>
    );
};

export default OrderHistory;