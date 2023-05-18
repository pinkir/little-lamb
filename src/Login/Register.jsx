import { Link } from 'react-router-dom';
import login from '../assets/login2.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);


    const handleSignUp =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);


        createUser(email, password)
        

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img className='w-full max-w-sm' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-green-700">Sign Up!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered"
                                    name='name'
                                    required />
                            </div>
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
                                    required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="url" className="input input-bordered"
                                    name='photo'
                                    required />
                            </div>
                            <label className="label">
                                <p>Already have an account??  Please <Link to='/login' className='text-primary'> Login...</Link></p>
                            </label>
                            <div className="form-control mt-6">

                                <input type="submit" value="Sign Up" className="btn btn-warning bg-green-500" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;