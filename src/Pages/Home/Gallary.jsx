
import gellary2 from '../../assets/galarry2.jpg'

import gellary6 from '../../assets/galarry6.jpg'

import gellary10 from '../../assets/galarry10.jpg'
import gellary11 from '../../assets/galarry11.jpg'
import gellary12 from '../../assets/galarry12.jpg'
import gellary13 from '../../assets/banner7.jpg'

import gellary15 from '../../assets/banner6.jpg'


const Gallary = () => {
    return (
        <div>
            <h3 className='text-center text-5xl p-5 mt-20'>Photo Gallery</h3>
            <div className='grid grid-cols-3 gap-4 bg-slate-100 p-5'>
                <div className='col-span-2 '> <img src={gellary15} alt="" /> </div>
                <div className=''>
                    <img src={gellary2} alt="" />
                </div>
                <div className=''>
                    <img src={gellary10} alt="" />
                </div>
                <div className='col-span-2  '>
                    <img src={gellary12} alt="" />
                </div>
                <div className=''>
                    <img src={gellary11} alt="" />
                </div>
                <div className=''>
                    <img src={gellary6} alt="" />
                </div>
                <div className=''>
                    <img src={gellary13} alt="" />
                </div>
                
                
            </div>
        </div>
    );
};

export default Gallary;