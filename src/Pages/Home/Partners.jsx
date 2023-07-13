import logo1 from '../../assets/logo6.jpg'
import logo2 from '../../assets/logo2.jpg'
import logo3 from '../../assets/logo3.jpg'
import logo4 from '../../assets/logo4.jpg'
import logo5 from '../../assets/logo5.jpg'
const Partners = () => {
    return (
        <div>
            <div className='text-center mt-36 bg'>
                <h3 className='text-green-700 text-4xl mb-3'>Our Partners</h3>
                <p className='text-slate-500 mb-3'>Here are some Of our partners who helped us...</p>
            </div>
            <div className='lg:flex justify-around'>
                <img className='h-40' src={logo1} alt="" />
                <img className='h-40' src={logo2} alt="" />
                <img className='h-40' src={logo3} alt="" />
                <img className='h-40' src={logo4} alt="" />
                <img className='h-40' src={logo5} alt="" />
            </div>
        </div>
    );
};

export default Partners;