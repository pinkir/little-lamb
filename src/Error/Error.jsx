import { Link } from 'react-router-dom';
import error from '../assets/error.jpg'

const Error = () => {
    return (
        <div >
            
            <img className='w-2/5 mx-auto  relative' src={error} alt="" />
            <Link to='/' className="btn bg-green-600 mb-20 relative -top-44 left-1/2">Back To Home.</Link>
           
            
        </div>
    );
};

export default Error;