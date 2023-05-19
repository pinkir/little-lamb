
import gellary2 from '../../assets/galarry2.jpg'

import gellary6 from '../../assets/galarry6.jpg'

import gellary10 from '../../assets/galarry10.jpg'
import gellary11 from '../../assets/galarry11.jpg'
import gellary12 from '../../assets/galarry12.jpg'
import gellary13 from '../../assets/banner7.jpg'

import gellary15 from '../../assets/banner6.jpg'
import glitter from '../../assets/glitter.jpg'


const Gallary = () => {
    return (
        <div>
            <h3 className='text-center text-5xl p-5 mt-20'>Photo Gallery</h3>
            <div className='grid grid-cols-3 gap-2 bg-slate-100 p-5' >
                <div className='col-span-2 ' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"> <img src={gellary15} alt="" /> </div>
                <div className='' data-aos="fade-down">
                    <img src={gellary2} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img src={gellary10} alt="" />
                </div>
                <div className='col-span-2' data-aos="fade-left">
                    <img src={gellary12} alt="" />
                </div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={gellary11} alt="" />
                </div>
                <div data-aos="fade-up">
                    <img src={gellary6} alt="" />
                </div>
                <div data-aos="fade-left">
                    <img src={gellary13} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Gallary;