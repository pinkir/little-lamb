import { Link } from 'react-router-dom';
import login from '../assets/login2.jpg'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img className='w-full max-w-sm' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-green-700">Login now!</h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                name='email'
                                required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" 
                                name='password'
                                required/>
                                <label className="label">
                                    <p>New to LittleLAmb??  Please <Link to='/register' className='text-primary'> Register...</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Login" className="btn btn-warning bg-yellow-300" />
                            </div>
                        </form>
                        <div>
                            <button className="  btn btn-block btn-outline btn-success text-green-500"> <span className='mr-3 text-xl '><FaGoogle></FaGoogle></span>  Sign Up With Google </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;