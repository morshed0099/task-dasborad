import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authUser } from "../AuthProvider";
import { toast } from "react-hot-toast";





const Login = () => {
    const navigate = useNavigate()
    const { loginUserWithEmail, setUser, loginwithGoogle } = useContext(authUser)
    const haldelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUserWithEmail()
            .then(result => {
                const user = result.user
                setUser(user)
                toast.success('login success')
                navigate('/')
            }).catch(error => {
                console.error(error)
                toast.error(error.message)
            })

    }
    const handelGoogleLogin = (event) => {
        event.preventDefault()
        loginwithGoogle()
            .then(result => {
                const user = result.user
                setUser(user)
                toast.success('login success')
                navigate('/')
                console.log(user)
            }).catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    return (
        <div className="border-green-300 border  rounded-2xl w-96 mx-auto mt-16 shadow-md p-3">
            <form onSubmit={haldelLogin}>
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
                        <input name='eamil' placeholder="example@gmail.com" type="email" className="input w-full input-bordered" />
                    </div>
                    <div className="mb-2 mt-4">
                        <label>
                            Password
                        </label>
                    </div>
                    <div>
                        <input name='password' type="Password" placeholder="enter your password" className="input w-full input-bordered" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-info bg-gradient-to-r from-[#190fcf] to-[#248e4c] w-full mt-4 text-1xl hover:text-black font-bold text-white">
                        Login
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-center mt-4">
                <div className="flex justify-center mt-4 mb-3">
                    <span className="font-bolt text-2xl">--------- or -----------</span>
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={handelGoogleLogin}>

                    <img className="w-12 h-12 rounded-full" src="https://th.bing.com/th/id/OIP._2KcAjhfLzoZm34LMGXQdwAAAA?pid=ImgDet&rs=1" alt="" />

                </button>
            </div>
            <div className="text-center mt-4">
                Are You New ? <Link to='/signup' className="text-1xl font-bold text-blue-600" >Signup</Link>
            </div>
        </div>
    );
};

export default Login;