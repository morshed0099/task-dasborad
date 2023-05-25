import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="border-green-300 border  rounded-2xl w-96 mx-auto mt-16 shadow-md p-3">
            <form>
                <div className="flex mt-[-25px] justify-center">
                    <img className="w-14 h-14 rounded-full" src="https://th.bing.com/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mt-6 mb-3 text-center">Login Form</h2>
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
                    <button className="btn btn-info w-full mt-4 text-1xl hover:bg-blue-500 font-bold text-white">
                        Login
                    </button>
                </div>
            </form>
           
            <div className="text-center mt-4">
               Are You New ? <Link to='/signup' className="text-1xl font-bold text-blue-600" >Signup</Link>
            </div>
        </div>
    );
};

export default Login;