import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="border-green-300 border  rounded-2xl w-96 mx-auto mt-16 shadow-md p-3">
            <form>
                <div className="flex mt-[-25px] justify-center">
                    <img className="w-14 h-14 rounded-full" src="https://th.bing.com/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mt-6 mb-3 text-center">Signup Form</h2>
                    <div className="mb-2">
                        <label>
                            Your Email
                        </label>
                    </div>
                    <div>
                        <input placeholder="example@gmail.com" type="email" className="input w-full input-bordered" />
                    </div>
                    <div className="mb-2 mt-4">
                        <label>
                            Password
                        </label>
                    </div>
                    <div>
                        <input type="Password" placeholder="enter your password" className="input w-full input-bordered" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-info bg-gradient-to-r from-[#190fcf] to-[#248e4c] w-full mt-4 text-1xl hover:text-black font-bold text-white">
                        Signup
                    </button>
                </div>
            </form>
            <div className="flex justify-center mt-4 mb-3">
                <span className="font-bolt text-2xl">--------- or -----------</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <button>

                    <img className="w-12 h-12 rounded-full" src="https://th.bing.com/th/id/OIP._2KcAjhfLzoZm34LMGXQdwAAAA?pid=ImgDet&rs=1" alt="" />

                </button>
            </div>
            <div className='text-center mt-4'>
                You have alredy accaount <Link to='/login' className='text-blue-600 font-bold text-1xl'>login</Link>
            </div>
        </div>
    );
};

export default Signup;