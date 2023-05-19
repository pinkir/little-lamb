import { Link } from 'react-router-dom';
import logo from '../assets/littlelamb.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })

    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        {user?.email ?
                            <>
                                <li><Link to='/mytoys'>My Toys</Link></li>
                                <li><Link to='/addatoy'>Add A Toy</Link></li>
                            </>
                            :
                            ""}
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl" > <img className='h-3/4' src={logo} alt="" />  Little  <span className='text-green-600 text-4xl'>LA</span>mb</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>
                    {user?.email ?
                        <>
                            <li><Link to='/mytoys'>My Toys</Link></li>
                            <li><Link to='/addatoy'>Add A Toy</Link></li>
                        </>
                        :
                        ""}

                    <li><Link to='/blogs'>Blogs</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="avatar online">
                                <div className="w-11 rounded-full">
                                    <img src={user.photoURL} title={user.displayName} />
                                </div>

                            </div>
                            <button onClick={handleLogOut} className="btn  bg-green-700 ml-2">Log Out</button>
                        </>
                        :
                        <Link to='/login' className="btn  bg-green-700">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;